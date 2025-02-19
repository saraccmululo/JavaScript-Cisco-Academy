/*let rosePrice=8
let roseQt=70

let lilyPrice=10
let lilyQt=50

let tulipPrice=2
let tulipQt=120

let roseTotal= rosePrice*roseQt
let lilyTotal= lilyPrice*lilyQt
let tulipTotal= tulipPrice*tulipQt

let total=roseTotal + lilyTotal + tulipTotal

console.log ('Rose - unit price: '+ rosePrice+', quantity: '+roseQt+', value: '+roseTotal)
console.log ('Lily - unit price: '+ lilyPrice+', quantity: '+lilyQt+', value: '+lilyTotal)
console.log ('Tulip - unit price: '+ tulipPrice+', quantity: '+tulipQt+', value: '+tulipTotal)
console.log ('Total:'+total)*/

const rosePrice=8;
const lilyPrice=10;
const tulipPrice=2;

let roseQt=70;
let lilyQt=50;
let tulipQt=120;

let roseValue= rosePrice*roseQt;
let lilyValue= lilyPrice*lilyQt;
let tulipValue= tulipPrice*tulipQt;

let total=roseValue + lilyValue + tulipValue;

console.log ('Rose - unit price: '+ rosePrice+', quantity: '+roseQt+', value: '+roseValue);
console.log ('Lily - unit price: '+ lilyPrice+', quantity: '+lilyQt+', value: '+lilyValue);
console.log ('Tulip - unit price: '+ tulipPrice+', quantity: '+tulipQt+', value: '+tulipValue);
console.log ('Total:'+total);

roseQt=roseQt-20;
lilyQt= lilyQt-30;

roseValue= rosePrice*roseQt;
lilyValue= lilyPrice*lilyQt;

total=roseValue + lilyValue + tulipValue;

console.log ('Rose - unit price: '+ rosePrice+', quantity: '+roseQt+', value: '+roseValue)
console.log ('Lily - unit price: '+ lilyPrice+', quantity: '+lilyQt+', value: '+lilyValue)
console.log ('Tulip - unit price: '+ tulipPrice+', quantity: '+tulipQt+', value: '+tulipValue)
console.log ('Total:'+total)