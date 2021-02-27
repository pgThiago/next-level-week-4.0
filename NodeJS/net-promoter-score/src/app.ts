import 'reflect-metadata'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import createConnection from './database'
import { router } from './routes'
import { AppError } from './errors/AppError'

createConnection()

const app = express()

app.use(express.json())
app.use(router)
app.use((error: Error, request: Request, response: Response, _next: NextFunction) => {
	if(error instanceof AppError) return response.status(error.statusCode).json({ message: error.message })
	else return response.status(500).json({ status: 'Error', message: `Internal server error ${error.message}` })
})

export { app }