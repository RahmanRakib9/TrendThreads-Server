import { NextFunction, Request, Response } from 'express';
import flashSaleServices from '../services/flash-sale.service';

async function handleCreateFlashSale(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { title, img, price } = req.body;
    const flashSale = await flashSaleServices.createNewFlashSale(
      title,
      img,
      price,
    );

    res.status(201).json({
      message: 'Flash Sale Created Successfully!',
      payload: [flashSale],
    });
  } catch (error) {
    next(error);
  }
}

async function handleGetFlashSales(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const flashSales = await flashSaleServices.getFlashSales();

    res.status(200).json({
      message: 'All Flash Sales Retrieved Successfully!',
      payload: [flashSales],
    });
  } catch (error) {
    next(error);
  }
}
async function handleGetFlashSale(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const id = req.params.id;
    const flashSale = await flashSaleServices.getFlashSale(id);

    res.status(200).json({
      message: 'Flash Sale Retrieved Successfully!',
      payload: [flashSale],
    });
  } catch (error) {
    next(error);
  }
}

const flashSaleControllers = {
  handleCreateFlashSale,
  handleGetFlashSales,
  handleGetFlashSale,
};
export default flashSaleControllers;
