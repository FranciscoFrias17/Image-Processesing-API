import express, { Application } from 'express'
import ImageRouter from './routes/imageRouter'

const app: Application = express()

/* Routes */

app.use('/api/images', ImageRouter)

/* Listening */

const port = 3000
// eslint-disable-next-line no-console, no-undef
app.listen(port, (): void => console.log(`Server started on port ${port}`))

export default app
