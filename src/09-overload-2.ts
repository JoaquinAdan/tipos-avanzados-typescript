// Joaquin => [J,o,a,q,u,i,n] => string => string[]
// [J,o,a,q,u,i,n] => Joaquin => string[] => string

function parseStr(input: string): string[]; // si es un string devuelve un array de string (string[])
function parseStr(input: string[]): string; // si es un array de string devuelve un string (string)
function parseStr(input: number): boolean; // si es un numero devuelve un boolean (boolean)

// en sintesis el overload se puede solucionar poniendo el tipado por separado en cada funcion y luego en la funcion principal poner el tipado de la funcion principal y luego el tipado de las funciones sobrecargadas entre parentesis y separadas por un pipe (|) y luego en el cuerpo de la funcion principal poner un if para cada funcion sobrecargada y dentro de cada if poner el codigo de cada funcion sobrecargada y luego en el cuerpo de la funcion principal poner el codigo de la funcion principal y al final de la funcion principal poner un return con el tipo de dato que retorna la funcion principal y listo ya tenemos una funcion sobrecargada con typescript :D

function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string') {
    return input.split(''); // string[]
  } else if (typeof input === 'number') {
    return true; // boolean
  } else {
    return false;
  }
}

const rtaArray = parseStr('Joaquin');
// if (Array.isArray(rtaArray)) {
//   rtaArray.reverse();
// }
console.log('Joaquin => ', rtaArray);

const rtaString = parseStr(['J', 'o', 'a', 'q', 'u', 'i', 'n']);
// if (typeof rtaString === 'string') {
//   rtaString.toUpperCase();
// }
console.log(rtaString.toUpperCase());

const rtaBoolean = parseStr(42);
