import express from 'express';
import cors from 'cors';
import apiRouter from './routes/index';

const app = express();

// Configuración de CORS para aceptar todas las peticiones
app.use(cors());

app.use(express.json());
app.use('/v1', apiRouter);

export default app;
