import { Product } from './product.model';

// type CreateProductDto = Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>;

export interface CreateProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
} // omito tipos de Product

type example = Pick<Product, 'color' | 'description'>; // armo un nuevo tipo en base a los tipos de Product
// hay gente que pone en sus interfaces todo opcional (value ?: tipo) lo cual es una mala practica para eso podemos usar el Omit y Pick para omitir o elegir los tipos que queremos usar en nuestro nuevo tipo. ej:
// interface UpdateProductDto {
//   title?: string;
//   image?: string;
//   description?: string;
//   color?: string;
//   price?: number;
//   isNew?: boolean;
//   tags?: string[];
//   stock?: number;
//   size?: Sizes;
//   category?: Category;
// }

// type UpdateProductDto = Partial<CreateProductDto>; // esto es lo mismo que el ejemplo de arriba, pero con el Partial, que es un tipo de typescript que hace que todos los tipos de la interfaz sean opcionales.
export interface UpdateProductDto extends Partial<CreateProductDto> {} // uso el omit que hace que no pueda modificar el id, createdAt, updatedAt y category ya que son datos sensibles que no deberian ser modificados.

type example2 = Required<Product>;

// export interface FindProductDto extends Partial<Product> {}
type example3 = Readonly<Product>; // de esta manera hacemos que todos los parametros sean de solo lectura, para complementar con el find product, so hay que combinar Partial con este
export interface FindProductDto extends Readonly<Partial<Product>> {} // fusion! :D
