let counter = 0;
let maxValue = 10;
let result = 1;
for (counter = 0; counter < maxValue; counter++) {
    console.log(result);
    result = result* maxValue - counter - 1;
}
console.log("Final result: ", result);