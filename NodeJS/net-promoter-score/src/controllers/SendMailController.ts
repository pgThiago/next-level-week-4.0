import { resolve } from 'path'
import { Request, Response } from 'express'
import { getCustomRepository } from "typeorm"
import { SurveysRepository } from "../repositories/SurveysRepository"
import { UsersRepository } from "../repositories/UsersRepository"
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository"
import SendMailService from '../services/SendMailService'

class SendMailController {
	async execute(request: Request, response: Response) {
		const { email, survey_id } = request.body
		const usersRepository = getCustomRepository(UsersRepository)
		const surveysRepository = getCustomRepository(SurveysRepository)
		const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)

		const user = await usersRepository.findOne({ email })
		if (!user) return response.status(400).json({ error: 'User does not exists' })

		const survey = await surveysRepository.findOne({ id: survey_id })
		if (!survey) return response.status(400).json({ error: 'Survey does not exists' })

		const variables = {
			name: user.name,
			title: survey.title,
			description: survey.description,
			user_id: user.id,
			link: process.env.URL_MAIL
		}

		const surveyUserAlreadyExists = await surveysUsersRepository.findOne({
			where: [{ user_id: user.id }, { value: null }],
			relations: ['user', 'survey']
		})
		const npsPath = resolve(__dirname, '..', 'views', 'emails', 'npsMail.hbs')

		if(surveyUserAlreadyExists){
			await SendMailService.execute(email, survey.title, variables, npsPath)
			return response.json(surveyUserAlreadyExists)
		}

		const surveyUser = surveysUsersRepository.create({
			user_id: user.id,
			survey_id
		})
		
		await surveysUsersRepository.save(surveyUser)
		await SendMailService.execute(email, survey.title, variables, npsPath)

		return response.json(surveyUser)
	}
}

export { SendMailController }