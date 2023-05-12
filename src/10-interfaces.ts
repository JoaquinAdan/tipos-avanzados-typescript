type Sizes = 'S' | 'M' | 'L' | 'XL';
type userId = string | number; // no se puede hacer una interfaz de un solo tipo, una interfaz necesita un cuerpo.
// type Product = {
//   id: string | number;
//   title: string;
//   creteadAt: Date;
//   stock: number;
//   size: Sizes;
// };´

interface Product {
  id: userId;
  title: string;
  creteadAt: Date;
  stock: number;
  size?: Sizes;
}; // un interface se puede extender, esa es la caracteristica principal que diferencia a type de interface, en proyectos por lo general existe un solo interface en la cual se utilizan patrones para extender y hacer herencias de la principal.

const products: Product[] = [];

products.push({
  id: 1,
  title: 'p1',
  creteadAt: new Date(),
  stock: 90,
})

const addProduct = (data: Product) => {
 products.push(data);
}
