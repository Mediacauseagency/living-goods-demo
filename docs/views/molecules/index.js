const h = require('choo/html')
const parameterize = require('../helpers/parameterize')
const docs = require('../helpers/docs')

const sections = [
  {
    title: 'CTA box',
    view: h`<div class='px-1'>${require('./ctaBox')}</div>`
  },
]


const molecules = () => docs('Molecules', sections)

module.exports = molecules

