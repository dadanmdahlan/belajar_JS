//weakmap merupakan varian dari map yang mendukung garbage collection . garbage collection adalah proses dimana interpreter javascript mengambil kembali memori yang tidak lagi dapat dijangkau dan tidak dapat digunakan lagi oleh program. garbage collection di JS dilakukan secara otomatis dan bukan menjadi urusan dari developer.

// yang dimaksud Weakmap adalah referensi terhadap nilai yang disimpan. apabila suatu nilai yang disimpan di weakmap sudah tidak terjangkau atau tidak bisa lagi diakses maka referensi ke memorinya akan di hapus.

// berikut ini adalah beberapa hal yang membedakan antara map dan weakmap

/*
 1. key dari weakmap harus berupa object atau array . nilai primitif tidak bisa digunakan sebagai key karena mendukung garbage collection.
 2. weakmap memiliki method get(), set(), has() dan delete(). namum weakmap tidak termasuk katergorit iterable sehingga tidak memilik method key(), values() atau forEach()
 3. weakmap juga tidka memiliki property size ini karena ukuran weakmap dapat berubah karena proses garbage collection
 */

 // contoh map

//  let visitsCountMap = new Map(); // Menyimpan daftar user
 
// function countUser(user) {
//     let count = visitsCountMap.get(user) || 0;
//     visitsCountMap.set(user, count + 1);
// }
 
// let jonas = { name: "Jonas" };
// countUser(jonas);                // Menambahkan user "Jonas"
 
// jonas = null;                    // Data object "Jonas" dihapus
 
// console.log(visitsCountMap);
 
/* output
Map(1) { { name: 'Jonas' } => 1 }
*/

//weakmap

let visitsCountMap = new WeakMap(); // Menyimpan daftar user

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);                // Menambahkan user "Jonas"

jonas = null;                    // Data object "Jonas" dihapus

console.log(visitsCountMap);

//Seperti halnya WeakMap, WeakSet adalah versi weak reference dari Set. Perbedaan antara WeakSet dan Set antara lain:

/*eakSet tidak bisa menyimpan nilai primitif.
WeakSet bukan iterable dan hanya memiliki method add(), has(), dan delete().
WeakSet tidak memiliki properti size.*/