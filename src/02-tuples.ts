const prices: (number | string)[] = [1, 3, 2, 2, 2, 'as'];
prices.push(1);
prices.push('a');

// let user: [string, number] = ['Joaquin', 15];
let user: [string, number, boolean];
// user = ['Joaco', 15]
// user = ['12', 12]
// user = [];
// user = ['Joaco'];
// user = ['Joaco', 12];
user = ['Joaco', 12, true];
//         ⬆      ⬆
// make a tuple with 3 elements and the last one is optional

const [username, age] = user; // destructuring tuples
console.log(username);
console.log(age);
// una tuple, es como react maneja useState
