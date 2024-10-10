//string primitive
const message = '   This is my first Message   ';


//string object
const another = new String('hi');

message.length 
message.includes('This') //true else false
message.startsWith('This') //true
message.endsWith('E') //TRUE
message.indexOf('first')

message.replace('first', 'second'); //replaces 'first' with 'second' in message but does'nt modify the original message
message.toLowerCase(); //
message.split(' ') //Splits a message into an array depending with the spaces within the quotes