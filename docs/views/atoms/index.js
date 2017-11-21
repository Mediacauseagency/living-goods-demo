const h = require('choo/html')
const parameterize = require('../helpers/parameterize')
const docs = require('../helpers/docs')

const sections = [
  {
    title: 'Colors',
    view: require('./colors')
  },
  {
    title: 'Typography',
    view: require('./typography')
  }
]


const atoms = () => docs('Atoms', sections)

module.exports = atoms
