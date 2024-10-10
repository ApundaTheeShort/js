
array = [1,2,3,'', undefined, false, true];
console.log(countTruthy(array));

function countTruthy (array) {
  let count = 0;
  for (let value of array) 
    if(value)
      count ++;
  return count;

}