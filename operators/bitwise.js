//Bitwise OR
//returns 1 when theres a 1
console.log(1 | 2); // = 3


//Bitwise AND
//Returns 1 whrn two 1's are there otherwise returns 0
console.log(1 & 2); // = 0

//REAL LIFE usage, (ACCESS CONTROL SYSTEM) using it to give Read, Write and Exercute permissions.
//Read, Write, Exercute
//we can use the last 3 bits to give permisssions by assigning a 1 if true

//Read     00000100
//Write    00000010
//Exercute 00000001

const readPermission = 4;
const writePermission = 2;
const ExercutePermission = 1;

//Access control system
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission | ExercutePermission;
console.log(myPermission);

let message = (myPermission & ExercutePermission) ? 'You have Exercute permissions' : "you dont";
console.log(message);


