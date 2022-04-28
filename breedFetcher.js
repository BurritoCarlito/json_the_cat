const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`; // declaring url from the API given

  request(url, function(error, _response, body) {
  //request to get content from the internet to my own console
    if (error) {
      callback(error, null);
    } else if (body === '[]') {
      callback("Unable to find breed, please try again.", null);
    } else {
      const data = JSON.parse(body); // converts the JSON string into an acutal object
      callback(null, data[0].description);
    }
  //accesses the fist entry in the data array and prints out the description for the user
  });
};

module.exports = { fetchBreedDescription };
