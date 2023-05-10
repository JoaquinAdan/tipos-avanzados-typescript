// unknown es un tipo de dato que puede ser cualquier cosa, pero no se puede acceder a sus propiedades, a menos que se haga una comprobacion de tipo
let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {}; //⬅⬅⬅⬅⬅⬅⬅⬅⬅⬅⬅⬅⬅⬅⬅⬅⬅ ⬅ ⬅ ⬅ ⬅ ⬅ ⬆
//                                                         ⬆
let isNew: boolean = anyVar; // ultimo valor fue un objeto ⬆

let unknownVar: unknown;
unknownVar = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = 1;
unknownVar = [];
unknownVar = {};

function sum(a: unknown, b: number) {
  // comprobando el tipo
  if (typeof a === 'number') {
    return a + b;
  }
  throw new Error(`La variable '${a}' no es un número`);
}

// unknownVar.doSomething()
if (typeof unknownVar === 'string') unknownVar.toUpperCase(); // puedes resumir esta linea de codigo en el siguiente comentario?
// (unknownVar as string).toUpperCase();

const parse = (str: string): unknown => {
  return JSON.parse(str);
};
JSON.parse('{name:"joaquin"}');

// podrias documentarme este archivo?
// si, pero no quiero
// yo te estoy pagando, ayudame un poquito por favor
// ok, pero solo un poquito
// este archivo es un ejemplo de como se puede usar unknown y any
// para hacer que el codigo sea mas seguro
// y evitar errores
