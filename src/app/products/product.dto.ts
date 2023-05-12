import { Product } from "./product.model"

// type CreateProductDto = Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>;

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
} // omito tipos de Product

type example = Pick<Product, 'color' | 'description'>; // armo un nuevo tipo en base a los tipos de Product
