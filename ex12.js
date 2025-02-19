// let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];
// for(number of numbers){
// console.log(numbers);
// }
// for (even of numbers){
//     if (even%2===0){
//         console.log (even);
//     }
// }

// let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];
// console.log(numbers);
// for (number of numbers){
//     if (number>10 && number<60){
//         console.log (number);
//     }
// }

let vessel={latitude: 40.07,
            longitude: 154.48,
            course: 285.6,
            speed: 14.0,
            imo: 9175717,
            name: "mareno"};
for (let key in vessel){
    console.log (`${key} -> ${vessel[key]}`);
}