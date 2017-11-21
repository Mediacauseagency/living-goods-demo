const h = require('choo/html')

const colors = [
  {
    name: '--blue-1', 
    color: '#56b7e0'
  },
  {
    name: '--blue-2',
    color: '#44ade2'
  },
  {
    name: '--blue-3',
    color: '#0281a4'
  },
  {
    name: '--blue-4',
    color: '#014f84'
  },
  {
    name: '--orange-1',
    color: '#f68a5d'
  },
  {
    name: '--orange-2',
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

module.exports = () => {
  const square = obj => h`
    <div class='col-3 md-col-4 sm-col-6 px-1 pb-2'>
      <div>
        <div class='aspect aspect-1x1'>
          <div style='background-color: ${obj.color}'></div>
        </div>
        <p class='mb-0 sub'>${obj.name}</p>
        <p class='m-0 opacity-075 small'>${obj.color}</p>
      </div>
    </div>
  `
  return h`<div class='flex flex-wrap'>${colors.map(square)}</div>`
}

