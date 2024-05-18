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

const getCategories = async () => {
  const newCategory = await Category.find();
  return newCategory;
};

const getCategory = async (id: string) => {
  const category = await Category.findById(id);
  return category;
};

const categoryServices = {
  createNewCategory,
  getCategories,
  getCategory,
};
export default categoryServices;
