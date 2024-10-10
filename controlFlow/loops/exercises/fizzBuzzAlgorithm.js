

// function fizzBuzz(input) {
//   if(input % 3 === 0 && input % 5 === 0) console.log("FizzBuzz");
//   else if(input % 3 === 0) console.log("Fizz");
//   else if(input % 5 ===0) console.log("Buzz");
//   else console.log(input);
// }

// const output = fizzBuzz(67);
// console.log(output);




//FIZZBUZZ STANDARD


function fizzBuzz(input) {
  if (typeof input !== 'number') 
    return NaN;
  if(input % 3 === 0 && input % 5 === 0) return 'FizzBuzz';
  if(input % 3 ===0) return 'Fizz';
  if(input % 5 === 0) return 'Buzz';
  return input;

  
}

const output = fizzBuzz(false);
console.log(output);

