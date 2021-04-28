// let data=['data','data'];
// console.log(data[0]);

// let nama='johan'
//  console.log('halo  '+nama+' !')
//  console.log(`halo  ${nama} !`)

//  let pengumuman = "Hello\n"+
//                  "Be Fullstack Javascript Developer!";
//  let pengumuman1 = `Hello
// Be Fullstack Javascript Developer!`; 
// console.log(pengumuman);
// console.log(pengumuman1);     

// let x= 10;
// let y= 10;

// console.log(`hasil dari perkalian x * y adalah ${x*y}`);

// var x = 20
//  function test() {
//      var y = 10
     
//      return x
     
//  }
//  console.log(test());
//  console.log(y);

//  var x= 10
//  if(x === 20){
//      var y =10
//  }

//  console.log(x)
//  console.log(y)

//  let x = 20
//  let y = 0
//  if( x === 20){
//       y = 10
//  }

//  console.log(x)
//  console.log(y)

//  let i = 200
//  for( let i=1;i<=5;i++){
//      console.log(i)

//  }
//  console.log(i)

//  let j = 1
//  const z = 2
//  j=10
// //  variabel dengan type const (kontanta di gunakan untuk variabel yg tidak bis di ubah nilai nya )
// // let type variabel yang scope nya berlaku pada lingkungan tersebut dan nilainya bisa di ubah ubah 

// const person = Object.freeze( {
//     name: 'Fuad',
//     age :35
// })
// person.name='Hafid'
// console.log(person )
// agar nilai const tidak bisa di rubah pada object maka gunakan method freeze

//   belajar Arrow function

// (argumen) => {
//     return expression
// }
 
// atau versi shorthand
// (argumen) => expression
/*
// fungsi tanpa argumen pada ES 5
function getPric1(){
    return 25000
}

// atau bisa dengan gaya penulisan variabel

const getPrice2 = function(){
    return 25000
}

//sedangkan pada ES6 : arrow function

    const getPrice3 = () => {
        return 25000
    }
// versi shorthand dari arrow function

    const getPrice4 = () =>25000
// fungsi argumen satu argumen

function increment (x) {
    return ++x
}

// ES6 : arrow function

const increment = (x) => ++x

// function dengan argumen lebih dari satu

function multiply (a,b){
    return a * b
}

const multiply = (a,b)=> a*b

//ES6 arrow function dengan nilai di set pada argumen

const incerement = (x=1) => ++x

*/

//  fungsi arrow tidak hanya untuk menyingkat fungsi , juga menyelesaikan lingkup keyword this , keyword this pada JS digunakan untuk merujuk ke parent Object

// contoh keyword this ada di dalam fungsi dalam object
// solusi pertama  
// const web = {
//     teks: 'hello',
//     render: function () {
//         const that=this //<== variabel this disimpan ke variabel lain 
//         setTimeout(function(){
//         console.log(`menampilkan  ${that.teks}`)
//         },1000)

//     }
// }
//solusi ke dua menggunakan binding  keyword this 
// const web = {
//     teks: 'hello',
//     render: function () {
       
//         setTimeout(function(){
//         console.log(`menampilkan  ${this.teks}`)
//         }.bind(this),1000)

//     }
// }

// solusi ke tiga  dengan ES 6 arrow function  kontek this tidak mengacu pada object timeout melainkan objek web
// const web = {
//     teks: 'hello',
//     render: function () {       
//         setTimeout(()=>{
//         console.log(`menampilkan  ${this.teks}`)
//         },1000)   
//      }
// }

// console.log(web.teks)
// web.render() 
// arrow function tidak bisa digunakan pada render karena this tersebut bisa mengacu pada console browser / objek windows
// const web = {
//     teks: 'hello',
//     render: () => {  // kita ubah jadi format arrow function
//       setTimeout(() => {
//         console.log( 'menampilkan: ' + this.teks )
//       }, 1000)
//     }
//   }
  
//   console.log(  web.teks  )
//   web.render() // hasil nya undefined karena this tersebut mengacu diatas nya yaitu object windows
// Tenary operator

// cara biasa
// if(statemen) benar else SVGAnimatedLength

// //tenary operator

// statement ? benar: salah


// let nilai =80
//     if (nilai>= 75){
//         console.log('Lulus')
//     } else {
//         console.log('tidak lulus')
//     }

// const nilai1 = 80
// console.log((nilai >= 75) ? 'Lulus ' : 'Tidak Lulus ')


// Short-circuit Evaluation
// Short-circuit evaluation artinya pengujian atau evaluasi yang minimal terhadap ekpresi boolean (operator logika AND && dan OR ||). Evaluasi terhadap ekspresi dilakukan dari kiri ke kanan.

// contoh 
// const auth= true
// console.log(auth && 'Selamat Datang !')

// const user3 ={
//     nama:'Arif',
//     umur:25
// }

// console.log(user.pekerjaan || 'pengangguran ')

// const user2 = {
//     nama: 'Budi',
//     umur: 27,
//     pekerjaan: 'Programmer'
//   }
//   console.log(user2.pekerjaan || 'Pengangguran') // Programmer

// JSX

// const user = { name: 'Hasan' }
// const Home = () => {
//   return (
//     <div>
//       Selamat datang {user && user.name}!
//     </div>
//   )
// }

//  chaining adalah cara pengaksesan suatu properti secara bertingkat

// misalnya 

const user1 = {
    name:'burhan',
    street :'Jl. Jenderal Soedirman 50',
    City: 'Jakarta',
}

// cara satu dengan menggunakan titik diikuti nama properti
console.log(user1.name)
console.log(user1.street)
console.log(user1.City)

// cara ke dua menggunakan array
console.log(user1['name'])

// bentuk array ini akan berguna jika nama properti bersifat dinamis

const prop ='name'
console.log(user1[prop])

// nested properti

const user2 = {
    nama:'doni',
    address: {
        street: 'Jl. dago 30',
        city:'bandung'
    }
}

console.log(user2.nama)
console.log(user2.address.street)
console.log(user2['address']['city'])

const user3 = null

console.log(user3 && user3.name)

// optional chaining bentuk optional pada pengaksesan suatu properti secara bertingkat
// JS memeliki cara singkat untuk mengatasi hal tersebut dengan karakter tanda tanya
// dalam bentuk titik
console.log(user3?.name);
console.log(user3?.address?.street)

// dalam baentuk array
 console.log(user3?.['name'])
 console.log(user3?.[address]?.['city'])