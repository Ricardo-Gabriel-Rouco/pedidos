import express from 'express'
import apiRouter from './routes/index'

const app = express()
app.use(express.json())

app.use('/v1', apiRouter)



export default app