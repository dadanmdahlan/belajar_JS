console.log("hello world")

const user = {
    firstName: "Dadan",
    lastName: "Dadan Muhammad Dahla",
    age: 27,
    isMarried: true,
    "asal":"bandung barat"
};

console.log(`Halo nama saya ${user.firstName} ${user.lastName}`);
console.log(`umur saya  ${user.age} tahun`);
console.log(`saya berasal dari ${user["asal"]}`);

user.age=28;// mengubah nilai dari key object
user["asal"]="Bandung";// mengubah nilai dari key object
console.log(user);
user.noHp="081224907833"; // menambahkan property ke object 
console.log(user);
delete user.noHp; // cara menghapus property
console.log(user);

