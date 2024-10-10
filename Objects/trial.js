

function createCircle(radius) {
  return {
    radius,
    draw () {
      console.log("Johnte");
    }
  };
}
const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(3);


