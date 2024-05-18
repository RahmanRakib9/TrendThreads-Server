import mongoose, { model } from 'mongoose';
import { TFlashSale } from '../interfaces/flash-sale.interface';

const flashSaleSchema = new mongoose.Schema<TFlashSale>(
  {
    id: {
      type: String,
    },
    img: {
      type: String,
    },
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    tag: {
      type: String,
      enum: ['new', 'old'],
    },
  },
  { timestamps: true },
);

export const FlashSale = model<TFlashSale>('flashSales', flashSaleSchema);
