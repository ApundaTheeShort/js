// we use PAscal Notation

function Circle(radius) {
  this.radius = radius,
  this.draw = function () {
    console.log('HEllo athadKA');
  }
}
const circle = new Circle(2);
//THE "new" OPERATOR
//1) Creates a new empty object
//2} Sets "this" to point to the new object
//3) returns the object from the Function
