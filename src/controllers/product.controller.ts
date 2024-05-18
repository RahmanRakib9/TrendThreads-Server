import { NextFunction, Request, Response } from 'express';
import productServices from '../services/product.service';

async function handleCreateProduct(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { title, img, price } = req.body;
    const product = await productServices.createNewProduct(title, img, price);

    res.status(201).json({
      message: 'Product Created Successfully!',
      payload: [product],
    });
  } catch (error) {
    next(error);
  }
}

const productControllers = {
  handleCreateProduct,
};
export default productControllers;
