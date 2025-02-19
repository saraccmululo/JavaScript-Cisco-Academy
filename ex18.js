let add = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a+b : NaN;
let sub = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a-b : NaN;
let mult = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a*b : NaN;

let action=(callback,a,b)=> callback(a,b);


console.log(action(add, 12, 10)); // -> 22
console.log(action(sub, 12, 10)); // -> 2
console.log(action(mult, 10, 10.1)); // -> NaN