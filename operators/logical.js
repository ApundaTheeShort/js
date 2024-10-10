//logical AND (&&)
// console.log(true && false);

let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('eligible',eligibleForLoan);

//Logical OR (||)


let applicationRefused = !eligibleForLoan;
console.log('applicationRefused',applicationRefused);


//Logical with non-booleans

let userColor = undefined; //if user color is undefined, then it shows the default color.
let defaultColor = 'blue ';
let currentColor = userColor || defaultColor;
console.log(currentColor);