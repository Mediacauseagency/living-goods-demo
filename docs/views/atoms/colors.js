const h = require('choo/html')

const colors = [
  {
    name: '--blue-1',
    color: '#44ade2'
  },
  {
    name: '--blue-2',
    color: '#0281a4'
  },
  {
    name: '--blue-3',
    color: '#014f84'
  },
  {
    name: '--orange-1',
    color: '#f47a44'
  },
  {
    name: '--grey-1',
    color: '#f2f2f2'
  },
  {
    name: '--black',
    color: '#313334'
  }
]

const square = obj => h`
  <div class='col-3 md-col-4 sm-col-6 px-1 pb-2'>
    <div>
      <div class='aspect aspect-1x1'>
        <div style='background-color: ${obj.color}'></div>
      </div>
      <p class='mono mb-0 sub pb-05'>${obj.name}</p>
      <p class='mono m-0 small'>${obj.color}</p>
    </div>
  </div>
`

module.exports = h`<div class='flex flex-wrap'>${colors.map(square)}</div>`
