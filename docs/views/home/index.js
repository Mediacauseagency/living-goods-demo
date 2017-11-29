const h = require('choo/html')
const img = require('../helpers/randomImage')

const home = (state) => {
  return h`
    <div>
      <h1>Home (todo)</h1>
      <img src=${img(400, 400)}>
    </div>
  `
}

module.exports = home
