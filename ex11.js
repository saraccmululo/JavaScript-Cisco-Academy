//Reverse Loop
let initialNumber=Number(prompt('Please choose a number:'));
    if(Number.isNaN(initialNumber)|| initialNumber==0){
        alert('invalid number');
        throw new Error ();}
let finalNumber=Number(prompt ('Please choose a number smaller than the first one:'));
    if(!Number.isNaN(finalNumber)&& finalNumber!==0 && finalNumber<initialNumber){
        for (let i=initialNumber; i>=finalNumber; i-=10){
            console.log(i);}
    }else{
       alert('invalid number');} 
    

        // do{
        //     let initialNumber=prompt('Please choose a number:');
        // } while (initialNumber>finalNumber ||);
    
