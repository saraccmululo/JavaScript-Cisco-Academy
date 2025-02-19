//Example 1
//IF STATEMENT
//let number=prompt('Choose a number (0-200):', 0);
// if (number>90 && number<110){
//     alert('Bingo!');
// } else{
//     alert ('miss');
// }

//TERNARY STATEMENT
//let result=(number>90 && number <110)?'Bingo!':'Miss';
//alert(result);



//Example 2
// let n1=Number(prompt('Choose a number:'));
// let n2=Number(prompt('Choose another number:'));
// let operand=prompt('Choose one of the following operations: +, -, *, or /:');
// let result;
//if(Number.isNaN(n1)=false && Number.isNaN(n2)=false){

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
    // }
// }else{
//     alert("Error. Not a valid entry.")
//}


//Jeito do Joaquim com guard clause//
let n1=Number(prompt('Choose a number:'));
    if(Number.isNaN(n1)){
        alert('Not a number');
        throw new Error ("Operation could not be executed");
    }
let n2=Number(prompt('Choose another number:'));
    if(Number.isNaN(n2)){
        alert('Not a number');
        throw new Error ("Operation could not be executed");
    }
let operand=prompt('Choose one of the following operations: +, -, *, or /:');
    if(operand.length == ""){
        alert('Empty operand.');
    }
    else if (operand!=='+'&& operand!=='-'&& operand!=='*'&& operand!=='/'){
        alert('Invalid operand.');
    }
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
    1}

