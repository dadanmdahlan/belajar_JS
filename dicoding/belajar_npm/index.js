const _ = require('lodash');

const myArray =[1,2,3,4];
let sum =0;

for(let i=0;i<myArray.length;i++){
    sum +=myArray[i];
}

console.log(sum);

// menggunakan reduce

let sum1=myArray.reduce((prev,curr)=>{
    return prev+curr;
});
console.log(sum1);

// kita bis menggunakan dengan lodash

const sum2= _.sum(myArray);
console.log(sum);