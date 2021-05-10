// // // contoh pertama
// // // function makeCoffee(){
// // //   const coffe = getCoffee(); //async process menggunakan promise
// // //   console.log(coffee);

// // // }
// // // tidak bisa seperti diatas melainkan harus seperti ini

// // //promise
// // // function makeCoffee(){
// // //   getCoffee().then(coffee=>{
// // //     console.log(coffee);
// // //   });
// // // }

// // // //callback 
// // //   function makeCoffee(){
// // //     getCoffee(function(coffee){
// // //       console.log(coffee);
// // //     });
// // //   }
// // // makeCoffee();

// // // namus sejak ES 8(ESCMAScript 2017) ada firut async/await

// // // contoh penggunaan async/await

// // const getCoffee=()=>{
// //   return new Promise ((resolve,reject) =>{
// //     const seeds =0;
// //     setTimeout(()=>{
// //       if(seeds>=10){
// //         resolve("kopi didapatkan!");
// //       }else{
// //         reject("Biji kopi habis");
// //       }
// //     },1000);
// //   })
// // }
// // // handle onRejected using async-await 
// // async function makeCoffee(){
// //   try {
// //     const coffee = await getCoffee(); //async process menggunakan promise
// //     console.log(coffee);
// //   } catch (rejectedReason) {
// //     console.log(rejectedReason);
// //   }
 

// // }
// // makeCoffee();

// function fetchUsername() {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           resolve('JSUser');
//       }, 3000);
//   })
// }

// console.log("Fetching username...");
// fetchUsername().then((value) => {
//     console.log(`You are logged in as ${value}`);
// })
// console.log("Welcome!");

const capital = {
    "Jakarta": "Indonesia",
    "London": "England",
    "Tokyo": "Japan"
}
capital["New Delhi"] = "Indonesia";

console.log(capital["Indonesia"]);

const artistsAndSongs = {
    "Keyakizaka46": ["Silent Majority"],
    "Blackpink": ["How You Like That", "Ice Cream"],
    "JKT48": ["Rapsodi", "Heavy Rotation"],
    "Twice": ["What is Love?"],
}

artistsAndSongs["Babymetal"] = ["Gimme chocolate"];

delete artistsAndSongs["Keyakizaka46"];
console.log(artistsAndSongs);

function multiply(num) {
    total = num * num;
}

const result = multiply(3);

console.log(result);

function calculate(value) {
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

console.log(calculate(3));

// class MyCustomError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "MyError";
//     }
// }

// try {
//     throw new MyCustomError("This is an error");
// } catch (e) {
//     console.log(e.message);
// }

// let myString = "";

// try {
//     myString += "a";
//     throw Error();
// } catch(e) {
//     myString += "b";
// } finally {
//     myString += "c";
//     throw Error();
//     myString += "d";
// }

// console.log(myString);

function fetchUsername() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('JSUser');
        }, 3000);
    })
}

console.log("Fetching username...");
const username = fetchUsername();
console.log(`You are logged in as ${username}`);
console.log("Welcome!");