function div(n1,n2){
    if(Number.isFinite(n1) && Number.isFinite(n2) && n2!==0){
        return n1/n2;
    }else{
    alert("invalid entry");
        throw new RangeError ("invalid entry")
    }
}
let n1=Number(prompt ('Enter first number:'));
let n2=Number(prompt('Enter second number (except 0):'));
let res=div(n1,n2);

alert(`The division result between ${n1} and ${n2} is ${res}.`);

//console.log(div(n1,n2));