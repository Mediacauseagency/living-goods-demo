const h = require('choo/html')
const img = require('../helpers/randomImage')
const heroHeader = require('../organisms/heroHeader')


const home = (state) => {
  const heroText =  h`<span>Living Goods Saves and <br class='sm-hide'>Lives Door-to-Door`
  return h`
    <div>
      ${heroHeader({
        text: heroText,
        imgUrl: img(1000, 600),
        btnLink: '#',
        btnText: 'Join Us'
      })}
    </div>
  `
}

module.exports = home
