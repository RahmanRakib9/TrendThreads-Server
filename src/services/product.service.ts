import { Product } from '../models/product.model';

const createNewProduct = async (title: string, img: string, price: number) => {
  const newProduct = await Product.create({
    title,
    img,
    price,
  });
  return newProduct;
};

const productServices = {
  createNewProduct,
};
export default productServices;
