// const checkLength = (number) => {
//   if (number.length >= 10 ) {
//     return true;
//   } else {
//     return false;
//   }
// }


// const filterLongNumbers = (number) => {
//   return number.filter(checkLength); 
// }

// const namesAndDiscounts = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];
// const generateMessages = namesAndDiscounts.map(x => "Hi " + x + "!" + "off our best candies for you today!");

// console.log(generateMessages);


const namesAndDiscounts = [
  {name: 'Anna', discount: 50},
  {name: 'Laura', discount: 40},
  {name: 'Josh', discount: 30},
  {name: 'Min', discount: 50},
  {name: 'Karla', discount: 60}
];

const generateMessages = namesAndDiscounts.map(namesAndDiscounts => "Hi " + namesAndDiscounts.name + "! " + namesAndDiscounts.discount + "% off our best candies for you today!");

console.log(generateMessages)