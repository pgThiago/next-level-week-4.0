import { PORT } from './server-port'
import { app } from './app'

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})