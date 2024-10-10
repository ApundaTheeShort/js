// let x = {value:10};
// let y = x;
// x.value = 20; 

let obj = {value: 10};
function increase (obj) {
  obj.value++;
}
increase(obj);
console.log(obj);
// console.log(increase(number));


//object properties enumeration
const circle = {
  radius : 10,
  draw ( ) {
    console.log("circle.radius");
  }
}
console.log(circle.draw());

for(let key in circle)
  console.log(key, circle[key]);

for(let key of Object.keys(circle))
  console.log(key);

for(let entry of Object.entries(circle))
  console.log(entry); 