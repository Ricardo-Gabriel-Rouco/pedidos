import express from 'express'
import apiRouter from './routes/index'

const app = express()
app.use(express.json())

app.use('/users', apiRouter)



export default app