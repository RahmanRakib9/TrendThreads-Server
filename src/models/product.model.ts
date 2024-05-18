import mongoose, { model } from 'mongoose';
import { TProduct } from '../interfaces/product.interface';

const productSchema = new mongoose.Schema<TProduct>(
  {
    id: {
      type: String,
    },
    title: {
      type: String,
    },
    img: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true },
);

export const Product = model<TProduct>('product', productSchema);
