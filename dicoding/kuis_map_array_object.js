const restaurant ={
    name :"ampera",
    city :"Bandung",
    "favorite drink" : "thai tea",
    "favorite food" : "ayam geprek",
    isVegan: true
};
 const name =restaurant["name"];
 const favoriteDrink = restaurant["favorite drink"];
 const favoriteFood = restaurant["favorite food"];


 // let evenNumber=[];
// for(let i=1;i<=100;i++){
//     if(i%2===0){
//         evenNumber.push(i);   
            
//     }
// }
// console.log(evenNumber);


const currency  = new Map([
    ['USD',14000],
    ['JPY',131],
    ['SGD',11000],
    ['MYR',3500]
]);



const priceInJPY =5000;
 const priceInIDR = priceInJPY * currency.get("JPY");
 console.log(currency);
 console.log (priceInIDR);