showPrime(100);

function showPrime(limit) {
  for (let number = 2; number <= limit; number++) {
    isPrimez(number);

    function isPrimez(number) {
      let isPrime = true;
      for (let factor = 2; factor < number; factor++) {
        if (number % factor === 0) isPrime = false;
        break;
      }
      if (isPrime) console.log(number);
    }
  }
}
