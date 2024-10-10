let address = {
  street : 'Ondiek',
  city: 'Kisumu',
  zipCode: 40100
}

function showAddress (address) {
  for(let key in address)
    console.log(key, address[key]);
}
showAddress(address);

// for(let key of Object.entries(address)) ;
// console.log(entry);
