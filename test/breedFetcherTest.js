const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (error, desc) => {
      // we expect no error for this scenario
      assert.equal(error, null);
      
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compared returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
    });
    // should test the scenario where an invalid/non-existent breed is passed in -- shuld expect the first argument for our callback (err) to be set, and desc to be null.
    it('returns an error message for an invalid/non-existant breed, via callback', (done) => {
      fetchBreedDescription('golden', (error, desc) => {
        assert.equal(null, desc);

        const expectedError = "Unable to find breed, please try again.";

        assert.equal(error, expectedError);

        done();
    });
  });
});