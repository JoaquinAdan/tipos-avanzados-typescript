import { Product } from './product.model';
import {
  CreateProductDto,
  UpdateProductDto,
  FindProductDto,
} from './product.dto';
import { faker } from '@faker-js/faker';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  // data.id = 'askdmgoikasdmogipsda2';
  // data.createdAt = new Date(1998, 1, 1);
  // estos comentarios de arriba son ejemplos para el readonly
  const newProduct = {
    ...data,
    id: parseInt(faker.database.mongodbObjectId()),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: parseInt(faker.database.mongodbObjectId()),
      name: faker.commerce.productName(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (id: Product['id'], changes: UpdateProductDto) => {
  const index = products.findIndex((item) => item.id === id);
  products[index] = { ...products[index], ...changes };
  return products[index];
};

export const deleteProduct = (id: Product['id']) => {
  const index = products.findIndex((item) => item.id === id);
  products.splice(index, 1);
};

export const getProduct = (id: Product['id']) => {
  return products.find((item) => item.id === id);
};

export const findProductById = (id: Product['id']) => {
  return products.findIndex((item) => item.id === id);
};

export const findProducts = (dto: FindProductDto) => {
  // dto.color = "blue"
  // dto.tags = []; // no me deja asignar, pero tampoco me deberia dejar modificar como abajo
  // dto.tags?.pop(); // me deja modificar D:. Solucion en el nuevo find Product
  // export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  //   readonly tags: ReadonlyArray<string>;
  // } // fusion! :D

  return products;
};
