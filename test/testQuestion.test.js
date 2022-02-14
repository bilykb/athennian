const { expect } = require('chai');
const sinon = require('sinon');
const { getRefrain, getEnding } = require('../testQuestion');

describe('getRefrain(number)', function() {
  it('should return a string', function() {

    const songVerse = getRefrain(5);

    expect(songVerse).to.be.a('string');
  })
  it('should return a string indicating the number of beers on the wall', function() {

    const songVerse = getRefrain(5);
    const expectedOutput = `5 bottles of beer on the wall\n5 bottles of beer\ntake one down, pass it around 4 bottles of beer on the wall`

    expect(songVerse).to.equal(expectedOutput);
  })
})

describe('getEnding()', function() {
  it('should return a string', function() {
    const songVerse = getEnding();

    expect(songVerse).to.be.a("string");
  });
  
  it('should return a string indicating no more beers exist on the wall, with now many you subsequently purchased', function() {
    
    const totalNumBeers = 5;
    const songVerse = getEnding();
    const expectedOutput = `no more bottles of beer on the wall\nno more bottles of beer\nGo to the store, buy some more, ${totalNumBeers} bottles of beer on the wall`;

    expect(songVerse).to.equal(expectedOutput);
  })
});