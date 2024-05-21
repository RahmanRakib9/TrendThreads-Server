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
      payload: result,
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
    const categories = await categoryServices.getCategories();

    res.status(200).json({
      message: 'All Category Retrieved Successfully!',
      payload: categories,
    });
  } catch (error) {
    next(error);
  }
}

async function handleGetCategory(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const id = req.params.id;
    const category = await categoryServices.getCategory(id);

    res.status(200).json({
      message: 'Single Category Retrieved Successfully!',
      payload: category,
    });
  } catch (error) {
    next(error);
  }
}

const categoryControllers = {
  handleCreateCateroty,
  handleGetCategories,
  handleGetCategory,
};
export default categoryControllers;
