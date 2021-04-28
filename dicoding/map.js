//map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya object. yang membedakan adalah map memperbolehkan key dengan tipe data apapun dibandingkan object yang hanya mengizinkan key bertipe string au symbol

// untuk mendefinisikan map digunakan constructor seperti dibawah ini

//const myMap = new Map();
// atau bisa langsung bisa menetap kan nilai dari map secara langsung, gunakan array multi dimensi seperti ini

const myMap = new Map([
    ['1','a String key'],
    [1,'a number key'],
    [true , true]
]);
console.log(myMap);
console.log(myMap.get('1'));

const capital = new Map([
    ["jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo","japan"]
]);
console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi","India");
console.log(capital.size);
console.log(capital.get("New Delhi"));