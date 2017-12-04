const h = require('choo/html')
const img = require('../helpers/randomImage')
const heroHeader = require('../organisms/heroHeader')
const dividerWithText = require('../molecules/dividerWithText')


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
      ${dividerWithText('What we do')}
    </div>
  `
}

module.exports = home
