const h = require('choo/html')
const parameterize = require('../helpers/parameterize')
const docs = require('../helpers/docs')


const sections = [
  {
    title: 'Colors',
    view: h`<div>asdf</div>` 
  },
  {
    title: 'Typography',
    view: h`<div>asdf</div>` 
  }
]


const atoms = () => docs('Atoms', sections)

module.exports = atoms
