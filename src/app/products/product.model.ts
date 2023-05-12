import { Category } from '../categories/categories.model';
import { BaseModel } from '../base.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  color: string;
  price: number;
  isNew: boolean;
  tags: string[];
  stock: number;
  size?: Sizes;
  category: Category;
}
