import {
  addProduct,
  products,
  updateProduct,
  findProducts,
} from './products/product.service';
import { faker } from '@faker-js/faker';

for (let index = 0; index < 10; index++) {
  addProduct({
    // id: faker.database.mongodbObjectId(),
    title: faker.commerce.productName(),
    // createdAt: faker.date.recent(),
    // updatedAt: faker.date.recent(),
    image: faker.image.avatar(),
    description: faker.commerce.productDescription(),
    color: faker.color.rgb(),
    price: parseInt(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: [faker.commerce.department(), faker.commerce.department()],
    stock: faker.number.int({ min: 10, max: 100 }),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    categoryId: faker.database.mongodbObjectId(),
    // category: {
    //   id: faker.database.mongodbObjectId(),
    //   name: faker.commerce.productName(),
    //   createdAt: faker.date.recent(),
    //   updatedAt: faker.date.recent(),
    // },
  });
}

console.log(products[0]);
const firstProduct = products[0];
updateProduct(firstProduct.id, { title: 'New title', stock: 80, color: 'blue' });
console.log(products[0]);

findProducts({ color: '#blue' });
