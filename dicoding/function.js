// fungsi/ function adalah sebuah blok syntak yang bisa dipakai berulang ulang dan bisa mengeluarkan sebuah nilai

function multiply(a,b){
    return c =a*b;
};

console.log(multiply(2,3));

function greeting(name,language){
    if(language=== "English") {
        return `Good morning ${name} !`;
    }else if(language === "French"){
        return `Bounjour ${name} !`;
    } else{
        return `Selamat Pagi ${name} !`;
    }
};

let gretingMessage = greeting("Dadan","English");
let result = multiply(10,2);
console.log(result);
console.log(gretingMessage);


// Arrow function
// regular function 
// function declaration
function sayHello(greet){
    console.log(`${greet} !`);
};

// function expression

const sayName = function (name) {
    console.log(`nama saya ${name}`);
};

// arrow function 

// function expression

const sayHello1 = (name) => {
    console.log(`${greet} !`);
};

const sayName1 = (name) => {
    console.log(`nama saya ${name} !`);
};

sayName1("Dadan");

const sayName2 =name => console.log(`Nama Saya ${name}`);
sayName2("Dadan");
const sayHello2=()=>console.log("selamat pagi semuanya !");
sayHello2();

// ketika mengembalikan nilai tidak perlu menuliskan return  hanya bekerja untuk fungsi satu baris saja

const multiply4 =(a,b)=>a*b;
console.log(multiply(30,30));

function init() {
    var name = 'Obi Wan';   // Variabel lokal di dalam scope fungsi init
    
    function greet() {      // Inner function, merupakan contoh closure
        console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
    }

    return greet;
}

let myFunction = init();
myFunction();

const minimal= (a,b)=>{
    if(a<=b){
        return a;
    
    } else if (a>b) {
        return b;
    }
}


const power = (a,b)=>{
    return a**b;
}
