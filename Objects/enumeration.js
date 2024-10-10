
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