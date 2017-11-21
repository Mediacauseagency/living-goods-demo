const h = require('choo/html')
const parameterize = require('../helpers/parameterize')
const docs = require('../helpers/docs')
const colors = require('./colors')


const sections = [
  {
    title: 'Colors',
    view: require('./colors')
  },
  {
    title: 'Typography',
    view: h`<div>asdf</div>` 
  }
]


const atoms = () => docs('Atoms', sections)

module.exports = atoms
