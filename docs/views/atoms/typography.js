const h = require('choo/html')
const txt = require('../helpers/txt')(1)

const variations = [
  {
    className: '',
    title: '400'
  },
  {
    className: 'italic',
    title: '400 italic'
  },
  {
    className: 'bold',
    title: '700'
  },
  {
    className: 'bold italic',
    title: '700 italic'
  }
]

const example = (obj) => h`
  <div class='mb-2'>
    <p class='h2 m-0 ${obj.className || ''}'>${txt}</p>
    <p class='sub mono m-0 pt-05'>${obj.title}</p>
  </div>
`

module.exports = h`
  <div class='px-1'>
    <p class='mt-0'>We are using <strong>Merriweather Sans</strong>.</p>

    <div class='pl-1 pt-1'>
      ${variations.map(example)}  
    </div>

  </div>
`
