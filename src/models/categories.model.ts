import mongoose, { model } from 'mongoose';
import { TCategories } from '../interfaces/categories.interface';

const categorySchema = new mongoose.Schema<TCategories>(
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
    category: {
      type: String,
      enum: ['man', 'woman', 'kids'],
    },
  },
  { timestamps: true },
);

export const Category = model<TCategories>('category', categorySchema);
