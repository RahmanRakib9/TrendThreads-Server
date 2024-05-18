import express, { Application, Request, Response } from 'express';
import flashSaleRoute from './routes/flash-sale.route';
import categoryRoutes from './routes/category.route';
import productRoutes from './routes/product.route';
const app: Application = express();
import cors from "cors"

//Regular Middleware
app.use(express.json());
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello From Node Typescript Clean Template Application!');
});

// Flash Sale Route
app.use('/api/v1', flashSaleRoute);

// Category Route
app.use('/api/v1', categoryRoutes);

// Product Route
app.use('/api/v1', productRoutes);

export default app;
