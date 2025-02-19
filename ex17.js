// function add (a,b){
// if (Number.isInteger(a)&&Number.isInteger(b)){
//     return a+b;
// }else{
//     return NaN;
// }
// }
let add = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a+b : NaN;

// function sub (a,b){
// if (Number.isInteger(a)&&Number.isInteger(b)){
//     return a-b;
// }else{
//     return NaN;
// }
// }
let sub=(a,b)=>Number.isInteger(a)&&Number.isInteger(b)?a-b:NaN;



// function  mult (a,b){
// if (Number.isInteger(a)&&Number.isInteger(b)){
//     return a*b;
// }else{
//     return NaN;
// }
// }
let mult=(a,b)=>Number.isInteger(a)&&Number.isInteger(b)?a*b:NaN;

console.log(add(12, 10)); // -> 22
console.log(mult(12, 10.1)); // -> NaN
