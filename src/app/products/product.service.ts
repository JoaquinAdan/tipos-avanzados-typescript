import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  // data.id = 'askdmgoikasdmogipsda2';
  // data.createdAt = new Date(1998, 1, 1);
  // estos comentarios de arriba son ejemplos para el readonly
  products.push(data);
};

export const updateProduct = (id: string, changes: Product) => {
  const index = products.findIndex((item) => item.id === id);
  products[index] = { ...products[index], ...changes };
};

export const deleteProduct = (id: string) => {
  const index = products.findIndex((item) => item.id === id);
  products.splice(index, 1);
};

export const getProduct = (id: string) => {
  return products.find((item) => item.id === id);
};
