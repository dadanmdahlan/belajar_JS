

//destructuring array dan object

//destructuring array sebelum ES6

// const foods = ['Pie', 'Cake', 'Honey']
 
// const myFood = foods[0]
// const yourFood = foods[1]
// const ourFood = foods[2]
 
// console.log(myFood, yourFood, ourFood)
 
/* output:
Pie Cake Honey
*/

//destructuring object sebelum ES6
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
// const firstName = profile.firstName
// const lastName = profile.lastName
// const age = profile.age
 
// console.log(firstName, lastName, age)
 
/* output:
John Doe 18
*/

//destructuring pada ES6 menggunakan object literal ({}) disisi kiri dari operator assigment

// const {firstName,lastName,age} = profile;

// console.log(firstName, lastName, age)

// const {lastName} = profile; //destructuring salah satu nilai

// console.log( lastName);

//destucturing assigment
// let firstName = "dadan ";

// let age =28;

// ({firstName,age} = profile);

// console.log(firstName);
// console.log(age);

// default value
/*
const {firstName,age,isMale=true}=profile;

console.log(firstName);
console.log(age);
console.log(isMale);
*/

// assigning to different local variabel names

const {firstName:localFirstName,lastName:localLastName,age:localAge} = profile;

console.log(localFirstName);
console.log(localLastName);
console.log(localAge);

//destruturing array 
/*Destructuring array serupa dengan destructuring object. 
Object menggunakan tanda kurung kurawal { } 
sedangkan array menggunakan tanda kurung siku [ ]. 
Perbedaan lainnya adalah 
destructuring array bekerja berdasarkan posisi daripada penamaan propertinya.
 Berikut contoh dari destructuring array pada ES6: */

 // destructuring arra pada ES6

 //const favorites = ["seafood", "Salad","Nugget","Soup"];

//  const [firstFood,secondFood,thirdFood,fourthFood] = favorites;

//  console.log(firstFood);
//  console.log(secondFood);
//  console.log(thirdFood);
//  console.log(fourthFood);

//untuk memilih nilai pada index tertentu untuk destrukturisasi pada array
// contohnya jika ingin mengambil nilai ketiga dari array kita tidak perlu menyiapkan variabel lokal untuk menampung nilai array pertama , kedua ataupun ke 4 kita bisa melakukan dengan membiarkan indeks array yang tidak kita inginkan tetap kosong (tanpa menulis variabel lokal lebih lanjut tanda koma tetap diperlukan untuk menunjukan posisi indeks-nya seperti dibawah ini)

// const [,,thirdFood ]=favorites;
// console.log(thirdFood);

//destructuring assigment 
 
// Kita juga bisa melakukan destructuring assignment pada array. Namun, tidak seperti object, kita tidak perlu membungkusnya dengan tanda kurung. Contohnya seperti berikut:

// let myFood = "Ice Cream";
// let herFood = "Noodles";
 
// [myFood, herFood] = favorites;
 
// console.log(myFood);
// console.log(herFood);
 

// var a =1;
// var b=2;
// var temp;

// console.log("sebelum swap");
// console.log("nilai a :"+a);
// console.log("nilai b :"+b);

// temp=a;
// a=b;
// b=temp;

// console.log("setelah swap");
// console.log("nilai a :"+a);
// console.log("nilai b :"+b);
// clearInterval

// menggnakan destructuring assigment
let a =1;
let b=2;


console.log("sebelum swap");
console.log("nilai a :"+a);
console.log("nilai b :"+b);

[a,b]=[b,a];

console.log("setelah swap");
console.log("nilai a :"+a);
console.log("nilai b :"+b);

// default value
// const favorites = ["Seafood"];
// const [myFood, herFood] = favorites
 
// console.log(myFood);
// console.log(herFood);
 
/* output:
Seafood
undefined
*/
// memasukan nilai ke dalam array
const favorites1 =['SEAFOOD'];
const [myFood,herFood='salad'] = favorites1;

console.log(myFood);
console.log(herFood);