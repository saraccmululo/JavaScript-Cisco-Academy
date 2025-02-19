let b1= true;
let b2= Boolean(true);

let n1= 100;
let n2= Number(200);

let bi1= 100n;
let bi2= BigInt(200);

let s1= "hello";
let s2= String("hello");

let u1= undefined;

console.log(`${b1} [${typeof b1}]`)
console.log(`${b2} [${typeof b2}]`)
console.log(`${n1} [${typeof n1}]`)
console.log(`${n2} [${typeof n2}]`)
console.log(`${bi1} [${typeof bi1}]`)
console.log(`${bi2} [${typeof bi2}]`)
console.log(`${s1} [${typeof s1}]`)
console.log(`${s2} [${typeof s2}]`)
console.log(`${u1} [${typeof u1}]`)

let str="1234";
let conv1=Number(str);
console.log(typeof conv1);
let conv2=BigInt(conv1);
console.log(typeof conv2);
let conv3=Boolean(conv2);
console.log(conv3);

//let bool=Boolen(BigInt(Number("1234")));

let s="1234" +"1234";
console.log(typeof s);
let n = 20 + 30;
console.log (typeof n);
let bi=200n+100n;
console.log (typeof bi);
let b= true+false;
console.log(typeof b);
let u=undefined+undefined;

const str1=42+ +"1";
console.log(str1);
