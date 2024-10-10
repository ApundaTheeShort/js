//copping the properties of one object to another
const circle = {
  radius: 1,
  color: "#FFFFFF",
  draw() {
    console.log("chora");
  },
};

//using FOR IN LOOP
const another = { }
for (let key in circle)
  another[key] = circle[key]
console.log(another)

//using OBJECT.ASSIGN objet
//takes properties and objects of the source objects and 
//copies it to the new object "{ }" and finally returns the result
//the new object can have properties

            const another = Object.assign({}, circle);
            console.log(another);

            //with exizting properties
            const another = Object.assign({
              border: '1px'
            }, circle);
            console.log(another);

  //Using the Spread operator
  const another = {...circle};
  console.log(another);
