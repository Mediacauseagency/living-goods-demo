const randInt = require('./randomPositiveInt')

function randomImage(x, y, type='people') {
  return `https://lorempixel.com/${x}/${y}/${type}/${randInt(10)}`
}

module.exports = randomImage
