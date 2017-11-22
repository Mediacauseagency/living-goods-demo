const h = require('choo/html')
const txt = require('../helpers/txt')(1)

const sans = [
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
  },
  {
    className: 'x-bold',
    title: '800'
  },
  {
    className: 'x-bold italic',
    title: '800 italic'
  }
]

const serif = [
  {
    className: 'serif',
    title: '400'
  },
  {
    className: 'serif italic',
    title: '400 italic'
  },
  {
    className: 'serif bold',
    title: '700'
  },
  {
    className: 'serif bold italic',
    title: '700 italic'
  },
  {
    className: 'serif black',
    title: '900'
  },
  {
    className: 'serif black italic',
    title: '900 italic'
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
    <p class='mt-0'>We are using <strong>Merriweather</strong> and <strong>Merriweather Sans</strong>.</p>

    <div class='pt-1'>
      <h3>Merriweather Sans</h3>
      <div class='pl-1 pt-1'>
        ${sans.map(example)}  
      </div>
    </div>

    <div class='pt-1'>
      <h3>Merriweather</h3>
      <div class='pl-1 pt-1'>
        ${serif.map(example)}  
      </div>
    </div>

  </div>
`
