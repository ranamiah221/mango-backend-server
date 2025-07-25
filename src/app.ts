import express, { Application, Request, Response } from 'express';
import { router } from './app/routes';
import { globalErrorHandler } from './app/middleware/globalErrorHandler';

const app: Application = express();

app.use(express.json())

app.use('/api', router)

app.get('/', (req: Request, res: Response) => {
    res.send("Wellcom to Mango server")
})

app.use(globalErrorHandler)

export default app;