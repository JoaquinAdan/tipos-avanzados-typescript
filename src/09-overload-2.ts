// Joaquin => [J,o,a,q,u,i,n] => string => string[]
// [J,o,a,q,u,i,n] => Joaquin => string[] => string

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;

export function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

const rtaArray = parseStr('Joaquin');
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('Joaquin => ', rtaArray);

const rtaString = parseStr(['J', 'o', 'a', 'q', 'u', 'i', 'n']);
if (typeof rtaString === 'string') {
  console.log(rtaString.toUpperCase());
}
