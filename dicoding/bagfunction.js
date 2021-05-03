// function programming 
// 3 konsep FP yakni pure function, immutability dan high order function

//pure function

// let PI =3.14;

// const hitungLuasLingkaran =(jariJari)=>{
//     return PI * (jariJari *jariJari);

// }
// console.log(hitungLuasLingkaran(4));

// PI=5;
// console.log(hitungLuasLingkaran(4))

// diatas adalah impure function  Fungsi tersebut tidak bisa dikatakan pure function karena ia membutuhkan nilai yang berada di luar dari fungsinya, yakni nilai PI. Bila nilai PI berubah, maka penggunaan fungsi menghasilkan nilai yang berbeda walaupun diberikan nilai parameter yang sama.

// pure function 

const hitungLuasLingkaran =(jariJari)=>{
    return 3.14 * (jariJari *jariJari);    
}
console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(8)); // 200.96
console.log(hitungLuasLingkaran(8)); // 200.96


const createPersonWithAge = (age, person) => {
person.age = age;
return person;
};

const person = {
name: 'Bobo'
};

const newPerson = createPersonWithAge(18, person);

console.log({
person,
//newPerson
});

/**
* Output:
*  {
    person: { name: 'Bobo', age: 18 },
    newPerson: { name: 'Bobo', age: 18 }
  }
*/

  /**Lihat! Lagi-lagi lebih mudah dan singkat bukan?

Agar lebih mudah dalam mengetahui apakah fungsi yang Anda buat sudah pure atau belum, pastikan 3 konsep ini ada pada fungsi yang Anda buat.

Mengembalikan nilai yang sama bila inputannya (nilai parameter) sama.
Hanya bergantung pada argumen yang diberikan.
Tidak menimbulkan efek samping.
Bila 3 konsep di atas terpenuhi, maka bisa dipastikan Anda membuat sebuah pure function. */

//immutability Konsep yang kedua adalah immutability. Immutable berarti sebuah objek tidak boleh diubah setelah objek tersebut dibuat. Kontras dengan mutable yang artinya objek boleh diubah setelah objek tersebut dibuat. Konsep immutability sangat kental pada paradigma FP. Anda bisa lihat sebelumnya pada contoh penggunaan array map. Ketika menggunakan array.map(), alih-alih ia mengubah nilai dari array itu sendiri, malah ia membuat atau menghasilkan array baru.

//contoh

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = names.map((name) => `${name}!`);

console.log({
names,
newNamesWithExcMark,
});

/**
* {
 names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
 newNamesWithExcMark: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
}
*/

const user = {
firstname: 'Harry',
lastName: 'Protter', // ups, typo!
}

const createUserWithNewLastName = (newLastName, user) => {
return { ...user, lastName: newLastName }
}

const newUser = createUserWithNewLastName('Potter', user);

console.log(newUser);

/**
* output:
* { firstname: 'Harry', lastName: 'Potter' }
* 
*/

//higher order function 

/**JavaScript memiliki kemampuan First Class Functions, karena itu fungsi pada JavaScript dapat diperlakukan layaknya sebuah data. Kita bisa menyimpan function dalam variabel, memberikan function sebagai parameter pada fungsi lainnya, hingga mengembalikan function di dalam function. */
// kuis function

/**
 *  greatAuthors =[];
const books = [
    { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
    { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
    { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
    { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
    { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
    { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
    { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
  ];
const filterBooks = books.filter((book)=> book.sales >1000000);
console.log(filterBooks);
greatAuthors = filterBooks.map((fbooks)=>{return `${fbooks.author} adalah penulis buku ${fbooks.title} yang sangat hebat`});


console.log(greatAuthors);
 */