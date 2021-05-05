// // class Animal{   	
// // 	constructor(name,age,isMammal){
// //       this.name=name;
// //       this.age=age;
// //       this.isMammal=isMammal;           
// //     }
// // }
// // class Rabbit extends Animal {
  
// // 	eat(){
// //     	return `${this.name} sedang makan!"`;
// //     }
// // }
// // class Eagle extends Animal{
  	
// // 	fly (){
// //     	return `${this.name} sedang terbang!`;
// //     }
// // }
// // const myRabbit = new Rabbit ("Labi",2,true);
// // console.log(myRabbit.eat());
// // const myEagle =new Eagle ("Elo",4,false);
// // console.log(myEagle.fly());

// /**
//  * TODO 1 (Tiger.js):
//  * Ekspor nilai dari class Tiger
//  *
//  * TODO 2 (Wolf.js)
//  * Ekspor nilai dari class Wolf
//  *
//  * TODO 3 (main.js)
//  * Impor class Tiger dan Wolf
//  *
//  * TODO 4 (main.js)
//  * Ekspor fungsi fight, myTiger, myWolf, dan result
//  *
//  */


// // TODO 3
// //let json = '{ "name": "Yoda", "age": 20 }';
// // let json = '{ "age": 20 }';
 
// // try {
// //     let user = JSON.parse(json);
// //     if (!user.name) {
// //         throw new SyntaxError("'name' is required.");
// //     }


// //     console.log(user.name);
// //     console.log(user.age);
// // } catch (error) {
// //     console.log(error.name);
// //     console.log(error.message);
// // }
// /**
//  * Saat ini, Anda sudah memiliki fungsi detectTriangle yang berguna untuk
//  * mendeteksi jenis segitiga berdasarkan nilai argumen.
//  * Contoh:
//  *  - 1, 1, 1 -> Segitiga sama sisi
//  *  - 4, 4, 2 -> Segitiga sama kaki
//  *  - 3, 4, 6 -> Segitiga sembarang
//  *
//  * Namun fungsi detectTriangle belum berjalan dengan baik karena
//  * bila ada argumen fungsi yang bukan number, alih-alih error, ia akan mengembalikan "Segitiga sembarang".
//  * Contoh:
//  *  - 1, false, 1 -> Segitiga sembarang
//  *  - 'a', 3, 5 -> Segitiga sembarang
//  *  - 12, 2, null -> Segitiga sembarang
//  * Kondisi yang diharapkan:
//  *  - 1, false, 1 -> Argumen kedua harus number
//  *  - 'a', 3, 5 -> Argumen pertama harus number
//  *  - 12, 2, null -> Argumen ketiga harus number
//  *
//  *  Tugas Anda adalah memperbaiki fungsi detectTriangle agar berjalan dengan kondisi yang diharapkan.
//  *  Pastikan Anda menggunakan teknik Throwing dan Handling Error yah.
//  *
//  * TODO 1:
//  * - Buatlah class ValidationError yang merupakan custom error dengan spesifikasi berikut:
//  *   - Turunan dari class Error
//  *   - Memiliki constructor(message)
//  *   - this.name harus bernilai "ValidationError"
//  *
//  * TODO 2:
//  * - Buatlah fungsi validateNumberInput yang memvalidasi 3 buah input (argumen) dengan spesifikasi berikut:
//  *   - Menerima 3 argumen
//  *   - Bila argumen pertama bukan number:
//  *     - throw ValidationError dengan pesan 'Argumen pertama harus number'
//  *   - Bila argumen kedua bukan number:
//  *     - throw ValidationError dengan pesan 'Argumen kedua harus number'
//  *   - Bila argumen ketiga bukan number:
//  *     - throw ValidationError dengan pesan 'Argumen ketiga harus number'
//  *
//  * TODO 3:
//  * - Panggil fungsi validateInputNumber di dalam fungsi detectTriangle untuk memvalidasi nilai argumen a, b, dan c.
//  *   - pastikan Anda memanggil validaateInputNumber menggunakan try .. catch.
//  *   - bila block catch terpanggil, kembalikan fungsi detectTriangle dengan pesan error yang dibawa fungsi validateInputNumber.
//  */


// // TODO 1

// // TODO 2

// try {
//     const validateInputNumber=(a,b,c){
//         if(typeof(a)!='number'){
//             throw new SyntaxError("Argumen pertama harus number");
//         } else if
//     }
//     const detectTriangle = (a, b, c) => {
//         // TODO 3
        
//         if (a === b && b === c) {
//           return 'Segitiga sama sisi';
//         }
      
//         if (a === b || a === c || b === c) {
//           return 'Segitiga sama kaki';
//         }
      
//         return 'Segitiga sembarang';
//       };
// } catch (error) {
    
// }
// const detectTriangle = (a, b, c) => {
//     // TODO 3
  
//     if (a === b && b === c) {
//       return 'Segitiga sama sisi';
//     }
  
//     if (a === b || a === c || b === c) {
// //       return 'Segitiga sama kaki';
// //     }
  
// //     return 'Segitiga sembarang';
// //   };
  
// //   /**
// //    * Hiraukan kode di bawah ini
// //    */

// /**
//  * Saat ini, Anda sudah memiliki fungsi detectTriangle yang berguna untuk
//  * mendeteksi jenis segitiga berdasarkan nilai argumen.
//  * Contoh:
//  *  - 1, 1, 1 -> Segitiga sama sisi
//  *  - 4, 4, 2 -> Segitiga sama kaki
//  *  - 3, 4, 6 -> Segitiga sembarang
//  *
//  * Namun fungsi detectTriangle belum berjalan dengan baik karena
//  * bila ada argumen fungsi yang bukan number, alih-alih error, ia akan mengembalikan "Segitiga sembarang".
//  * Contoh:
//  *  - 1, false, 1 -> Segitiga sembarang
//  *  - 'a', 3, 5 -> Segitiga sembarang
//  *  - 12, 2, null -> Segitiga sembarang
//  * Kondisi yang diharapkan:
//  *  - 1, false, 1 -> Argumen kedua harus number
//  *  - 'a', 3, 5 -> Argumen pertama harus number
//  *  - 12, 2, null -> Argumen ketiga harus number
//  *
//  *  Tugas Anda adalah memperbaiki fungsi detectTriangle agar berjalan dengan kondisi yang diharapkan.
//  *  Pastikan Anda menggunakan teknik Throwing dan Handling Error yah.
//  *
//  * TODO 1:
//  * - Buatlah class ValidationError yang merupakan custom error dengan spesifikasi berikut:
//  *   - Turunan dari class Error
//  *   - Memiliki constructor(message)
//  *   - this.name harus bernilai "ValidationError"
//  *
//  * TODO 2:
//  * - Buatlah fungsi validateNumberInput yang memvalidasi 3 buah input (argumen) dengan spesifikasi berikut:
//  *   - Menerima 3 argumen
//  *   - Bila argumen pertama bukan number:
//  *     - throw ValidationError dengan pesan 'Argumen pertama harus number'
//  *   - Bila argumen kedua bukan number:
//  *     - throw ValidationError dengan pesan 'Argumen kedua harus number'
//  *   - Bila argumen ketiga bukan number:
//  *     - throw ValidationError dengan pesan 'Argumen ketiga harus number'
//  *
//  * TODO 3:
//  * - Panggil fungsi validateInputNumber di dalam fungsi detectTriangle untuk memvalidasi nilai argumen a, b, dan c.
//  *   - pastikan Anda memanggil validaateInputNumber menggunakan try .. catch.
//  *   - bila block catch terpanggil, kembalikan fungsi detectTriangle dengan pesan error yang dibawa fungsi validateInputNumber.
//  */

//  class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "ValidationError";
//     }
// };
// // TODO 1
// const validateNumberInput = (a,b,c) => {
// 	if(typeof(a)!="number"){
//        throw new ValidationError("Argumen pertama harus number");
//      }
//     if(typeof(b)!="number"){
//      	 throw new ValidationError("Argumen kedua harus number");
//      }
// 	if(typeof(c)!="number"){
//      	throw new ValidationError("Argumen ketiga harus number");
//      }
// }

// const detectTriangle = (a, b, c) => {
//   // TODO 3
//   try {
//     validateNumberInput(a,b,c);
//     if (a === b && b === c) {
//       return 'Segitiga sama sisi';
//     }
  
//     if (a === b || a === c || b === c) {
//       return 'Segitiga sama kaki';
//     }
  
//       return 'Segitiga sembarang';
    
//  } catch (error) {
//       if(error instanceof ValidationError){
//         return error.message;        
//       }
//   }
// }

// console.log(detectTriangle('a',4,6))
// /**
//  * Hiraukan kode di bawah ini
//  */
// module.exports = { ValidationError, validateNumberInput, detectTriangle };
class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyError";
    }
  }
  
  try {
    throw new MyCustomError("This is an error");
  } catch (e) {
    console.log(e.message);
  }
  
  try {
    const arr = [1, 2, 3, 4];
    for (let i = 0; i <= 4; i++) {
        console.log(arr[i]);
    }
  } catch(e) {
    console.log("Out of bounds");
  }