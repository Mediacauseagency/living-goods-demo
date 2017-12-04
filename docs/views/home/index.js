const h = require('choo/html')
const img = require('../helpers/randomImage')
const heroHeader = require('../organisms/heroHeader')
const dividerWithText = require('../molecules/dividerWithText')
const textBoxOverImage = require('../organisms/textBoxOverImage')
const randNumber = require('../helpers/randNumber')
const txt = require('../helpers/txt')

const textBoxTitle = 'Empowering Community Health Workers Like Janat'

const heroText =  h`
  <span>Living Goods Saves and <br class='sm-hide'>
  Improves Lives Door-to-Door</span>
`

const home = (state) => {
  return h`
    <div>
      ${heroHeader({
        text: heroText,
        imgUrl: img(1000, 600),
        btnLink: '#',
        btnText: 'Join Us'
      })}
      <div class='pt-1'>
        ${dividerWithText('What we do')}
      </div>
      ${textBoxOverImage({
        title: textBoxTitle,
        imgUrl: img(700, 350),
        btnText: 'See more',
        link: '#',
        text: txt(3),
        direction: 'right'
      })}
      <div class='col-12 py-3'></div>
      ${textBoxOverImage({
        title: textBoxTitle,
        imgUrl: img(700, 350),
        btnText: 'See more',
        link: '#',
        text: txt(3),
        direction: 'left'
      })}
    </div>
  `
}

module.exports = home
