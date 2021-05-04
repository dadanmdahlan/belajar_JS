// import {coffeeStock as stock ,isCoffeeMachineReady} from './state.js';

// const makeCoffee = (type,miligrams)=>{
//     if(stock[type]>=miligrams){
//         console.log("kopi berhasil dibuat !");
//     } else {
//         console.log("Biji Kopi Habis");
//     }
// }

// const displayStock = stock =>{
//     for (const  keys in stock){  
//            console.log(`Kopi ${keys} berjumlah ${stock[keys]}`);
//     };
// };

// makeCoffee("robusta",100);
// displayStock(stock);
// console.log(isCoffeeMachineReady);
// //console.log(isCoffeeMachineReady );


/**
 * TODO 1 (Tiger.js):
 * Ekspor nilai dari class Tiger
 *
 * TODO 2 (Wolf.js)
 * Ekspor nilai dari class Wolf
 *
 * TODO 3 (main.js)
 * Impor class Tiger dan Wolf
 *
 * TODO 4 (main.js)
 * Ekspor fungsi fight, myTiger, myWolf, dan result
 *
 */


// TODO 3
import Tiger from "./state.js";
import Wolf from "./contoh.js";



const fight = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
    return tiger.growl();
  }
  if (wolf.strength > tiger.strength) {
    return wolf.howl();
  }
  return 'Harimau dan serigala sama-sama kuat!';
};

const myTiger = new Tiger();
const myWolf = new Wolf();

const result = fight(myTiger, myWolf);


// TODO 4
export { fight, myTiger, myWolf,  result}

import Tiger as tiger from "./Tiger.js";
import Wolf as wolf  from "./Wolf.js";