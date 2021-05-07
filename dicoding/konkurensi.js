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

// const executorFunction = (resolve, reject) => {
//   const isCoffeeMakerReady=true;
//   if(isCoffeeMakerReady) {
//     resolve ("Kopi berhasil dibuat");
//   } else {
//     reject("Mesin kopi tidak bisa digunakan ");
//   }
// }

// const makeCoffee=()=> {
//   return new Promise(executorFunction);
// }
// const coffeePromise =makeCoffee();
// console.log(coffeePromise);

// consuming promise

// const myPromise = new Promise(executorFunction);
// myPromise.then(onFullfi,onRejected);

// const stock ={
//   coffeBeans:10,
//   water:10,
// }
// const checkStock=() =>{
//   return new Promise ((resolve,reject)=> {
//     if(stock.coffeBeans>=16 && stock.water>=250) {
//       resolve("Stok Cukup . Bisa membuat kopu");
//     } else {
//       reject("stok tidak cukup");
//     }
//   });
// };

// const handleSuccess =resolvedValue => {
//   console.log(resolvedValue);
// }

// const handleFailure = rejectionReason =>{
//   console.log(rejectionReason);
// }

// checkStock().then(handleSuccess,handleFailure);
// cara 2 on rejected with catch method 
// checkStock()
//     .then(handleSuccess)
//     .catch(handleFailure);

// chaining promise

 // contoh promise
//  const state= {
//   stock:{
//     coffeeBeans: 250,
//     water: 1000,
//   },
//   isCoffeeMachineBussy:false,
// }

//     const checkAvailability=() =>{
//       return new Promise ((resolve,reject) =>{
//         setTimeout(()=>{
//           if(!state.isCoffeeMachineBussy){
//             resolve("Mesin kopi siap digunakan");
//           } else {
//             reject("Maaf mesin sedang sibuk .");
//           }
//         },1000);
//       });
//     };

   
//     const checkStock=() =>{
//       return new Promise ((resolve,reject) =>{
//         state.isCoffeeMachineBussy=true;
//         setTimeout(()=>{
//           if(state.stock.coffeeBeans >=16 && state.stock.water >= 250){
//             resolve("stok cukup. Bisa membuat kopi.");
//           }else{
//             reject("stok tidak cukup ");
//           }
//         },1500);
//       });
//     };
    
//     const brewCoffee = () =>{
//       console.log("Membuatkan kopi anda....")
//       return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//           resolve("Kopi sudah siap!")
//         },2000);
//       });
//     };
      
//     function makeEspresso() {
//       checkAvailability()
//           .then((value) =>{
//             console.log(value);
//             return checkStock();
//           })
//           .then((value)=> {
//             console.log(value)
//             return brewCoffee();
//           })
//           .then((value)=> {
//             console.log(value);
//           })
//           .catch((rejectedReason)=>{
//             console.log(rejectedReason);
//           });
//         }
//     makeEspresso();

//contoh promise all
const state= {
    stock:{
      coffeeBeans: 250,
      water: 1000,
    },
    isCoffeeMachineBussy:false,
  }
  
      const checkAvailability=() =>{
        return new Promise ((resolve,reject) =>{
          setTimeout(()=>{
            if(!state.isCoffeeMachineBussy){
              resolve("Mesin kopi siap digunakan");
            } else {
              reject("Maaf mesin sedang sibuk .");
            }
          },1000);
        });
      };
  
     
      const checkStock=() =>{
        return new Promise ((resolve,reject) =>{
          state.isCoffeeMachineBussy=true;
          setTimeout(()=>{
            if(state.stock.coffeeBeans >=16 && state.stock.water >= 250){
              resolve("stok cukup. Bisa membuat kopi.");
            }else{
              reject("stok tidak cukup ");
            }
          },1500);
        });
      };
      
      const brewCoffee = () =>{
        console.log("Membuatkan kopi anda....")
        return new Promise((resolve,reject) => {
          setTimeout(()=>{
            resolve("Kopi sudah siap!")
          },2000);
        });
      };
        
    //   function makeEspresso() {
    //     checkAvailability()
    //         .then((value) =>{
    //           console.log(value);
    //           return checkStock();
    //         })
    //         .then((value)=> {
    //           console.log(value)
    //           const promises =[boilWater(),gridCoffeeBeans()];
    //           return Promise.all(promises);
    //         })
    //         .then(value=>{
    //           console.log(value);
    //           return brewCoffee();
    //         })
    //         .then((value)=> {
    //           console.log(value);
    //           state.isCoffeeMachineBussy=false;
    //         })
    //         .catch((rejectedReason)=>{
    //           console.log(rejectedReason);
    //         });
    //       }
      
      const boilWater =() =>{
        return new Promise((resolve,reject) =>{
          console.log("Memanaskan air...");
          setTimeout(()=>{
            resolve("Air panas sudah siap !");
          },2000);
        })
      }

      const gridCoffeeBeans=()=>{
        return new Promise((resolve, reject)=>{
          console.log("Menggiling biji kopi...");
          setTimeout(()=>{
            resolve("Kopi sudah siap!");
          },2000);
        })
      }
      

      //chaining promise using async-await
      async function makeEspresso(){
          try {
              await checkAvailability();
              await checkStock();
              await Promise.all([boilWater(),gridCoffeeBeans()]);
              const coffe =await brewCoffee();
              console.log(coffe);
          } catch (rejectedReason) {
              console.log(rejectedReason)
          }
      }
      makeEspresso();