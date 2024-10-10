// function isLandscape (width, height) {
//   let result = width > height ? 'true' : 'false';
//   console.log(result);
// }

// let user = isLandscape(1, 10);


//CLEANER CODE
console.log(isLandscape(40, 30));

function isLandscape(width, height) {
  return (width > height);
}