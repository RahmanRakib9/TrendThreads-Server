import { Category } from '../models/categories.model';

const createNewCategory = async (
  title: string,
  img: string,
  category: string,
) => {
  const newFlashSale = await Category.create({
    title,
    img,
    category,
  });
  return newFlashSale;
};

const categoryServices = {
  createNewCategory,
};
export default categoryServices;
