import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  // data.id = 'askdmgoikasdmogipsda2';
  // data.createdAt = new Date(1998, 1, 1);
  // estos comentarios de arriba son ejemplos para el readonly
  products.push(data);
};
