const h = require('choo/html')
const img = require('../helpers/randomImage')

const home = (state) => {
  return h`
    <div>
      <img src=${img(400, 400)}>
    </div>
  `
}

module.exports = home
