
//for in loops
const person = {
  name: 'Wyclife',
  age: 21,
  institution: 'Egerton University',
  course: 'Computer Science'
}

for (let value in person)
  console.log(value, person[value]);

const africa = ['kenya', 'Uganda', 'Tanzania']
for(let index in africa) console.log(index, africa[index]); 