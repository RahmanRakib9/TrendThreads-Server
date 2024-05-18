import express, { Application, Request, Response } from 'express';
import flashSaleRoute from './routes/flash-sale.route';
const app: Application = express();

//Regular Middleware
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello From Node Typescript Clean Template Application!');
});

// Flash Sale Route
app.use('/api/v1', flashSaleRoute);

export default app;
