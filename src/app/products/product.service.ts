import { Product } from './product.model';
import { CreateProductDto } from './product.dto';
import { faker } from '@faker-js/faker';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  // data.id = 'askdmgoikasdmogipsda2';
  // data.createdAt = new Date(1998, 1, 1);
  // estos comentarios de arriba son ejemplos para el readonly
  const newProduct = {
    ...data,
    id: faker.database.mongodbObjectId(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.database.mongodbObjectId(),
      name: faker.commerce.productName(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };
  products.push(newProduct);
  return newProduct;
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
