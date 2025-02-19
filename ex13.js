
while(true){

let n1=prompt('Choose a number (or press Q to quit):');
    if(Number.isNaN(n1)){
        alert('Not a number');
        break;
    }
    if (n1=="Q"){
        break;
    }
    n1=Number(n1);
let n2=prompt('Choose another number (or press Q to quit):');
    if(Number.isNaN(n2)){
        alert('Not a number');
        break;
    }
    if (n2=="Q"){
        break;
    }
    n2=Number(n2);
let operand=prompt('Choose one of the following operations: +, -, *, or /(or press Q to quit):');
    if(operand.length == ""){
        alert('Empty operand.');
    }
    if (operand!=='+'&& operand!=='-'&& operand!=='*'&& operand!=='/'){
        alert('Invalid operand.');
    }
    if (operand=="Q"){
        break;
let result;

switch(operand){
    case"+":
        result=n1+n2;
        alert(`${n1} ${operand} ${n2}=${result}`);
        break;

    case"-":
        result=n1-n2;
        alert(`${n1} ${operand} ${n2}=${result}`);
        break;

    case"*":
        result=n1*n2;
        alert(`${n1} ${operand} ${n2}=${result}`);
        break;

    case"/":
        result=n1/n2;
        alert(`${n1} ${operand} ${n2}=${result}`);
        break;
    default:
        alert("Operation could not be executed.");
    }
}
}





// let willContinue;
// do{
// let n1=Number(prompt('Choose a number:'));
//     if(Number.isNaN(n1)){
//         alert('Not a number');
//         throw new Error ("Operation could not be executed");
//     }
// let n2=Number(prompt('Choose another number:'));
//     if(Number.isNaN(n2)){
//         alert('Not a number');
//         throw new Error ("Operation could not be executed");
//     }
// let operand=prompt('Choose one of the following operations: +, -, *, or /:');
//     if(operand.length == ""){
//         alert('Empty operand.');
//     }
//     else if (operand!=='+'&& operand!=='-'&& operand!=='*'&& operand!=='/'){
//         alert('Invalid operand.');
//     }
// let result;

// switch(operand){
//     case"+":
//         result=n1+n2;
//         alert(`${n1} ${operand} ${n2}=${result}`);
//         break;

//     case"-":
//         result=n1-n2;
//         alert(`${n1} ${operand} ${n2}=${result}`);
//         break;

//     case"*":
//         result=n1*n2;
//         alert(`${n1} ${operand} ${n2}=${result}`);
//         break;

//     case"/":
//         result=n1/n2;
//         alert(`${n1} ${operand} ${n2}=${result}`);
//         break;
//     default:
//         alert("Operation could not be executed.");
//     }

// let willContinue=prompt('Do you want to continue? [Y/N]');
// } while (willContinue=="Y");
