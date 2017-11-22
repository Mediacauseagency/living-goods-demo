const h = require('choo/html')
const randNumber = require('../helpers/randNumber')(2,6)
const txt = require('../helpers/txt')(randNumber)

const title = 'Empowering Community Health Workers Like Janat'

module.exports = h`
  <a hfre='#' class='hover-underline-parent inline-block sh-2 md-p-1 p-2 max-width-3'>
    <h2 class='hover-underline-child serif mt-0 h1 color-blue-1'>${title}</h2>
    <p class='pb-1'>${txt}</p>
    <span class='btn btn--orange mb-05'>Button</span>
  </a>
`
