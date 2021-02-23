import express from 'express'

import { PORT } from './server-port'

const app = express()

app.get('/', (request, response) => {

})

app.post('/', (request, response) => {
	
})

app.put('/', (request, response) => {
	
})

app.delete('/', (request, response) => {
	
})

app.patch('/', (request, response) => { // Alteração bem específica. Exemplo da Dani: alterar a imagem de um produto
	
})


app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})