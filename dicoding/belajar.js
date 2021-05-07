// // contoh pertama
// // function makeCoffee(){
// //   const coffe = getCoffee(); //async process menggunakan promise
// //   console.log(coffee);

// // }
// // tidak bisa seperti diatas melainkan harus seperti ini

// //promise
// // function makeCoffee(){
// //   getCoffee().then(coffee=>{
// //     console.log(coffee);
// //   });
// // }

// // //callback 
// //   function makeCoffee(){
// //     getCoffee(function(coffee){
// //       console.log(coffee);
// //     });
// //   }
// // makeCoffee();

// // namus sejak ES 8(ESCMAScript 2017) ada firut async/await

// // contoh penggunaan async/await

// const getCoffee=()=>{
//   return new Promise ((resolve,reject) =>{
//     const seeds =0;
//     setTimeout(()=>{
//       if(seeds>=10){
//         resolve("kopi didapatkan!");
//       }else{
//         reject("Biji kopi habis");
//       }
//     },1000);
//   })
// }
// // handle onRejected using async-await 
// async function makeCoffee(){
//   try {
//     const coffee = await getCoffee(); //async process menggunakan promise
//     console.log(coffee);
//   } catch (rejectedReason) {
//     console.log(rejectedReason);
//   }
 

// }
// makeCoffee();

function fetchUsername() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve('JSUser');
      }, 3000);
  })
}

console.log("Fetching username...");
fetchUsername().then((value) => {
    console.log(`You are logged in as ${value}`);
})
console.log("Welcome!");