// let end = 2;
// for(let i=1; i<=5; i++){
//     console.log(i);
// }

function max(array) {
    let maxValue = array[0];
    for(let i=0; i<array.length; i++){
     if(array[i] > maxValue) {
     maxValue = array[i];
     }
    }
    return maxValue;
}
console.log(max([1, 4, 6, 2])); 
console.log(max([10, 4, 6, 2])); 