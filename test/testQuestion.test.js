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

describe('reciteLyrics(number)', function() {

  // wrapper necessary for recursive function testing
  const wrapper = {
    startingNumber: 5,
    reciteLyrics: number => {

      if (number === 0) return wrapper.getEnding();
      
      wrapper.getRefrain(number)
      return wrapper.reciteLyrics(number - 1)
    },
    getEnding: () => {
      return `no more bottles of beer on the wall\nno more bottles of beer\nGo to the store, buy some more, ${this.startingNumber} bottles of beer on the wall`
    } ,
    getRefrain: number => {
      return `${number} bottles of beer on the wall\n${number} bottles of beer\ntake one down, pass it around ${number -1} bottles of beer on the wall`
    }
  };

  it('is only called 6 times, if reciteLyrics(5)', function() {
    const spy = sinon.spy(wrapper, 'reciteLyrics');
 
    wrapper.reciteLyrics(5);   // sets number of beers
    
    expect(spy.callCount).to.equal(6); 
  });

  it('only calls on getEnding() once, if reciteLyrics(50)', () => {
    const spy = sinon.spy(wrapper, 'getEnding');

    wrapper.reciteLyrics(50)

    expect(spy.callCount).to.equal(1);
  });
  
  it('only calls on getRefrain 99 times, if reciteLyrics(99)', () => {
    const spy = sinon.spy(wrapper, 'getRefrain');

    wrapper.reciteLyrics(99)

    expect(spy.callCount).to.equal(99)
  });
});