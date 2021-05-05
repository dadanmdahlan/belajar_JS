// console.log("selamat datang");
// setTimeout(()=>{
//   console.log("Terima kasih sudah mampir , silahkan datang kembali!");
// },3000);
// console.log("ada yang bisa dibantu?");

// const orderCoffee = () =>{
//   let coffee= null;
//   console.log("Sedang membuat kopi, Silahkan tunggu...");
//   setTimeout(()=>{
//     coffe= "Kopi sudah jadi!";
//   },3000);
//   return coffe;
// }
// const coffee =orderCoffee();
// console.log(coffee);

// cara callback
// const orderCoffee =callback=> {
//   let coffee = null;
//   console.log("sedang membuat kopi silahkan tunggu.... ");
//   setTimeout(()=>{
//     coffee = "Kopi sudah jadi";
//     callback(coffee);
//   },3000);
// }
// orderCoffee(coffee => {
//   console.log(coffee);
// });

//contructing promise object 

const executorFunction = (resolve, reject) => {
  const isCoffeeMakerReady=true;
  if(isCoffeeMakerReady) {
    resolve ("Kopi berhasil dibuat");
  } else {
    reject("Mesin kopi tidak bisa digunakan ");
  }
}

const makeCoffee=()=> {
  return new Promise(executorFunction);
}
const coffeePromise =makeCoffee();
console.log(coffeePromise);
