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
      payload: product,
    });
  } catch (error) {
    next(error);
  }
}

async function handleGetProducts(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const products = await productServices.getProducts();

    res.status(200).json({
      message: 'All Products Retrieved Successfully!',
      payload: products,
    });
  } catch (error) {
    next(error);
  }
}

async function handleGetProduct(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const id = req.params.id;
    const product = await productServices.getProduct(id);

    res.status(200).json({
      message: 'Single Product Retrieved Successfully!',
      payload: product,
    });
  } catch (error) {
    next(error);
  }
}

const productControllers = {
  handleCreateProduct,
  handleGetProducts,
  handleGetProduct,
};
export default productControllers;
