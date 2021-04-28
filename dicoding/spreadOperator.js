//spread Operator Sesuai namanya “spread”, fitur ini digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen. Spread operator dituliskan dengan tiga titik (...).

const favorites = ["Seafood", "salad", "Nugget","Soup"];

console.log(favorites);

console.log(...favorites);// spread operator mengeluarkan nilai dari array/ menyebarkan nilai array
//syntax diatas sama dengan yg dibawah 
console.log(favorites[0], favorites[1], favorites[2], favorites[3]);

// spread operator juga bisa digunakan untuk menggabungkan dua buah array

const other = ["Cake", "Pie","Donut"];

const allFavorites =[favorites,other];

console.log(allFavorites);

const allFavorites1 =[...favorites, ...other]; //spread operator menggabungkan nilai array

console.log(allFavorites1);