const request = require('request');
const breedName = process.argv[2];


let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`; // declaring url from the API given

request(url, function(error, _response, body) { //request to get content from the internet to my own console
  if (error) {
    return console.log('error: ', error);
  }
  const data = JSON.parse(body); // converts the JSON string into an acutal object
  const breed = data[0];
  if (breed) {
    console.log(breed.description);
  } else {
    console.log("Breed not found");
  }
  //accesses the fist entry in the data array and prints out the description for the user
});

