
function maxOfTwoNumbers(num1, num2) {
  if(num1 > num2) {
    console.log('num1: ',num1)
    return num1;
  } else if(num2 > num1) {
    console.log('num2',num2);
    return num2;
  }else {
    console.log('The numbers are the same');
  }
}

// let num1 = 10;
// let num2 = 20;
// maxOfTwoNumbers(num1, num2);

let number = maxOfTwoNumbers(30,20);
console.log(number)