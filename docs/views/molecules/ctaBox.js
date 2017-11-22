const h = require('choo/html')
const randNumber = require('../helpers/randNumber')(1,5)
const txt = require('../helpers/txt')(randNumber)

const title = 'Empowering Community Health Workers Like Janat'

module.exports = h`
  <div>
    <h2 class='serif'>${title}</h2>
    <p>${txt}</p>
    <a class='btn btn--orange'href='#'>Button</a>
  </div>
`
