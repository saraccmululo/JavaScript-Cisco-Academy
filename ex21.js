
//My answer with loop:

// let numbers=[10, 40, 0, 20, 50];
// let result;
// for (i=0; i<numbers.length;i++){
//     if(numbers[i]!==0){
//         result=numbers[i]/1000;
//         console.log (result);
//     }else{
//         console.log ('cannot divide by 0');
//         }
//     }


//Transformando o loop ai de cima into a function:

function div(array){
let result=0;
for (i=0; i<array.length;i++){
        try{
            if(array[i] == 0){
                throw new RangeError()
            }
            result=1000/array[i];
            }catch (error){
                 result= 'cannot divide by 0';
            }
    console.log (result);
    }
}

console.log(div([10, 40, 0, 20, 50]));
 



