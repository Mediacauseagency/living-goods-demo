const h = require('choo/html')
const txt = require('../helpers/txt')(1)


const open = [
  {
    className: '',
    title: 'Regular'
  },
  {
    className: 'italic',
    title: 'Regular italic'
  },
  {
    className: 'bold',
    title: 'Bold'
  },
  {
    className: 'bold italic',
    title: 'Bold italic'
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
    <p class='mt-0'>We are using <strong>Open Sans</strong> and <strong>Merriweather</strong>. <strong>Open Sans</strong> is the default font.</p>

    <div class='pt-1'>
      <h3>Open Sans has four variations:</h3>
      <div class='pl-1 pt-1'>
        ${open.map(example)}  
      </div>
    </div>

    <div class='pt-1'>
      <h3>Merriweather has just one variation:</h3>
      <div class='pl-1 pt-1'>
        ${example({className: 'merri bold', title: 'Bold'})}
      </div>
    </div>
  </div>
`
