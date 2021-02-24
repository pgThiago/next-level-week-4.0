import { Router } from 'express'
import { UserController } from './controllers/UserController'

const userController = new UserController()

const router = Router()

router.get('/', )

router.post('/users', userController.create)

router.put('/', )

router.delete('/', )

router.patch('/', ) // Alteração bem específica. Exemplo da Dani: alterar a imagem de um produto

export { router }