const h = require('choo/html')
const parameterize = require('../helpers/parameterize')
const docs = require('../helpers/docs')

const sections = [
  {
    title: 'Colors',
    view: require('./colors')
  },
  {
    title: 'Form elements',
    view: require('./form-elements')
  },
  {
    title: 'Icons',
    view: require('./icons')
  },
  {
    title: 'Typography',
    view: require('./typography')
  },
]


const atoms = () => docs('Atoms', sections)

module.exports = atoms
