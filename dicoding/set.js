// set => struktur data yang akan kita bahas , set sederhananya merupakan kumpulan nilai (set avalues). hal  yang membedakan set dengan struktur data yang lain adalah data pada set tidak berurutan dan juga tidak diindeks selain itu data di dalam set juga bersifat unik dan tidak ada duplikasi perhatikan contoh

const numberSet = new Set([1,4,6,4,1]);

console.log(numberSet);
//pada kode diatas terdapat beberapa angka yang duplikat yaitu angka 1 dan 4. secra otomatis set akan membuang angka yang sama sehingga nilai yang tersimpan adalah 1,4,6

numberSet.add(5);
numberSet.add(6);
numberSet.add(10);
console.log(numberSet);

//fungsi add hanya menerima satu argumen , jika anda memasukan array maka array tersebut akan dianggap sebagai satu elemen sendiri , nilai yang duplikat akan di abaikan.

numberSet.delete(4);
console.log(numberSet);

// ingat bahwa set tidak memiliki urutan atau index sehingga argumen yang dimasukan ke dalam fungsi delete adalah nilai yang akan di hapus bukan index.
console.log(numberSet);