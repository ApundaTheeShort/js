// checkSpeed(Math.floor(75));

// function checkSpeed(speed) {
//   const speedLimit = 70;
//   if (speed <= speedLimit) console.log('Ok');
//   if (speed > speedLimit) {
//     if(speed%speedLimit === 5) console.log('point 1');
//     for(i = 0; i<12 ; i++) {
//       if(speed%speedLimit === 5) console.log('point 2');
//       if(speed%speedLimit === 10) console.log('point 3');
//       if(speed%speedLimit === 15) console.log('point 4');
//       if(speed%speedLimit === 20) console.log('point 5');
//     }
//   }if(speed>=180) console.log('License suspended');
// }



checkSpeed(75);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) {
    console.log('Ok');
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);  
  if (points >= 12) 
    console.log('Licence Suspended');
  else 
  console.log('Points: ',points);
  }
