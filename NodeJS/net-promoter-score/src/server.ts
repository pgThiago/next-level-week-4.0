import 'reflect-metadata'
import express from 'express'

import './database'
import { PORT } from './server-port'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use(router)

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})