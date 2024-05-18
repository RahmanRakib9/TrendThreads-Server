import { FlashSale } from '../models/flash-sale.model';

const createNewFlashSale = async (
  title: string,
  img: string,
  price: number,
) => {
  const newFlashSale = await FlashSale.create({
    title,
    img,
    price,
  });
  return newFlashSale;
};

const getFlashSales = async () => {
  const getFlashSales = await FlashSale.find();
  return getFlashSales;
};

const flashSaleServices = {
  createNewFlashSale,
  getFlashSales,
};
export default flashSaleServices;
