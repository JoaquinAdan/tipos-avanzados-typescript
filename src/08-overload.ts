// Joaquin => [J,o,a,q,u,i,n] => string => string[]
// [J,o,a,q,u,i,n] => Joaquin => string[] => string

function parseStr8(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

const rtaArray8 = parseStr8('Joaquin');
if (Array.isArray(rtaArray8)) {
  rtaArray8.reverse();
}
console.log('Joaquin => ', rtaArray8);

const rtaString8 = parseStr8(['J', 'o', 'a', 'q', 'u', 'i', 'n']);

// Para poder utilizar el metodo toUpperCase en estas funciones sobrecargadas primero tengo que hacer una sersion de tipo para que el compilador sepa que tipo de dato es el que esta recibiendo y asi poder acceder a sus propiedades y metodos sin que el compilador me tire un error de tipo de dato invalido
if (typeof rtaString8 === 'string') {
  console.log(rtaString8.toUpperCase());
}

console.log(rtaString8.toUpperCase());
