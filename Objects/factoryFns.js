
function createCircle (radius) {
  return {
    radius,
      draw () {
      console.log("chora");
    }
  };
}
console.log(createCircle(3));

//factory fns
const circle1 = createCircle(1);
console.log(circle1);

console.log(createCircle(2));

