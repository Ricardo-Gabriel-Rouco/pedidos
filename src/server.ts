import express from 'express'
import userServer from './routes/userRoutes'
import costumerRoutes from './routes/costumerRoutes'
import orderRoutes from './routes/orderRoutes'
const app = express()
app.use(express.json())

app.use('/users', userServer)
app.use('/costumer', costumerRoutes)
app.use('/orders', orderRoutes)


export default app