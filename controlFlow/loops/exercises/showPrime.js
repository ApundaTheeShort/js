

showPrime(20);
// console.log(showPrime(10));

function showPrime(limit) {
  for (let number = 2;  number <= limit; number++ ) {
    isPrime();
    if(isPrime) console.log(number);
  }
}

function isPrime(number) {
  
  let isPrime = true;
  for(let factor = 2; factor < number; factor++) {
    if(number % factor === 0) {
      return false;
    }
    return true;
  }
}




