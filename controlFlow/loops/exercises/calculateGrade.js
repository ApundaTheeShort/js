const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return 'A';
  if (average < 70) return 'B';
  if (average < 80) return 'C';
  if (average < 90) return 'D';
  return 'A';
}

function calculateAverage(array) {
  let sum = 0;
  for(let values of array) 
    sum += values;
    console.log(sum);
  return sum / array.length;
}




