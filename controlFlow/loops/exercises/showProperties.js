
const movie = {
  title: 'a',
  releaseYear: 2018,
  rating: 4.4,
  director: 'Guy'

};



showProperties(movie);

function showProperties(obj) {
  for(let key in obj)
    if(typeof obj[key] ==='string')
      console.log(key, obj[key]);
}
