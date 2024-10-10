// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// console.log(getRandomInt(3));

function getRandomNumber (min, max) {
return Math.random() * (max - min) + min;
}

console.log(getRandomNumber(5, 11));
