import { NextFunction, Request, Response } from 'express';
import categoryServices from '../services/category.service';

async function handleCreateCateroty(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { title, img, category } = req.body;
    const result = await categoryServices.createNewCategory(
      title,
      img,
      category,
    );

    res.status(201).json({
      message: 'New Category Created Successfully!',
      payload: [result],
    });
  } catch (error) {
    next(error);
  }
}

async function handleGetCategories(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const category = await categoryServices.getCategories();

    res.status(201).json({
      message: 'All Category Retrieved Successfully!',
      payload: [category],
    });
  } catch (error) {
    next(error);
  }
}

const categoryControllers = {
  handleCreateCateroty,
  handleGetCategories,
};
export default categoryControllers;
