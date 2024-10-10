let role = 'guest';

switch(role) {
  case 'guest':
    console.log('Guest User');
    break;
  case 'Administrator':
    console.log('Admin User');
    break;
  default:
    console.log('Hatukujui Mzee!!');
}

//implementing with if else statements

if(role==='guest') console.log('Guest User');
else if(role==='Admini') console.log('Admin User');
else console.log('hatukujui mzee')