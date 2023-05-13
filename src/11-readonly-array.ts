// const numbers: number[] = [1, 2, 3, 4, 5];
const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];
numbers.push(9); // modifica el array principal por eso no deja
numbers.pop(); // modifica el array principal por eso no deja
numbers.unshift(0); // modifica el array principal por eso no deja
numbers.filter(() => {});  // No modifica, genera un nuevo array so its ok
numbers.reduce(() => 0); // No modifica, genera un nuevo array so its ok
numbers.map(() => 0); // No modifica, genera un nuevo array so its ok
