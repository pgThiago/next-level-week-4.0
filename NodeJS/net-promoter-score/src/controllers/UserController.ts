import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { UsersRepository } from '../repositories/UsersRepository'

import * as yup from 'yup'
import { AppError } from '../errors/AppError'

export class UserController {
	async index(request: Request, response: Response) {
	}

	async create(request: Request, response: Response) {
		const { name, email } = request.body

		const schema = yup.object().shape({
			name: yup.string().required(),
			email: yup.string().email().required()
		})

		// if(!(await schema.isValid(request.body))) response.status(400).json({ error: 'Validation Failed!' })
		// ou 
		try {
			await schema.validate(request.body, { abortEarly: false })
		} catch (error) {
			throw new AppError(error)
		}

		const usersRepository = getCustomRepository(UsersRepository)

		const userAlreadyExists = await usersRepository.findOne({ email })

		if (userAlreadyExists) throw new AppError('User already exists :)')

		const user = usersRepository.create({
			name, email
		})

		await usersRepository.save(user)

		return response.status(201).json(user)
	}

	async update(request: Request, response: Response) {
	}

	async delete(request: Request, response: Response) {
	}
}