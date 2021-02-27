import { Router } from 'express'
import { UserController } from './controllers/UserController'
import { SurveyController } from './controllers/SurveyController'
import { SendMailController } from './controllers/SendMailController'
import { AnswerController } from './controllers/AnswerController'
import { NpsController } from './controllers/NpsController'

const userController = new UserController()
const surveyController = new SurveyController()
const sendMailController = new SendMailController()
const answerController = new AnswerController()
const npsController = new NpsController()

const router = Router()

router.get('/', )

router.post('/users', userController.create)

router.get('/surveys', surveyController.show)
router.post('/surveys', surveyController.create)

router.post('/sendMail', sendMailController.execute)

router.get('/answers/:value', answerController.execute)

router.get('/nps/:survey_id', npsController.execute)

router.put('/', )

router.delete('/', )

router.patch('/', ) // Alteração bem específica. Exemplo da Dani: alterar a imagem de um produto

export { router }
