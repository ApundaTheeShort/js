

console.log(multiplesSum(10));

function multiplesSum(limit) {
  let sum = 0;

  for (i = 0; i <= limit; i++) 
    if (i % 3 === 0 || i % 5 === 0) 
      // console.log(i);
      sum += i;

  return sum;  
    
}
