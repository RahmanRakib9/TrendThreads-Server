import { Product } from '../models/product.model';

const createNewProduct = async (title: string, img: string, price: number) => {
  const newProduct = await Product.create({
    title,
    img,
    price,
  });
  return newProduct;
};

const getProducts = async () => {
  const products = await Product.find();
  return products;
};

const productServices = {
  createNewProduct,
  getProducts,
};
export default productServices;
