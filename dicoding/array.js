let myArray = ["Coklat" ,42.5,22,true,'programming'];

console.log(myArray); // akses array
console.log(myArray[1]); // akses nilai index ke-n pake [n]


console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]); // akses nilai lebih dari index nya
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

myArray.push('Javascript'); // menambahkan nilai array ke data terakhir 
console.log(myArray);

myArray.pop(); // mengeluarkan nilai data / elemen terakhir pada array
console.log(myArray);

myArray.shift(); // mengeluarkan nilai data  /elemen pertama pada array
console.log(myArray);

myArray.unshift('Jarum'); // menambahkan nilai pada elemen pertama pada array 
console.log(myArray);

delete myArray[1]; // untuk menghapus data dari array, hanya menghapus data pada index yang ditentukan lalu membiarkan posisi tersebut kosong.

console.log(myArray);

myArray.splice(1,2);// menghapus elemen index ke n sebanyak n elemen  
console.log(myArray);
