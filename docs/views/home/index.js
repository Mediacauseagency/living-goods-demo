const h = require('choo/html')

const img = require('../helpers/randomImage')
const randNumber = require('../helpers/randNumber')
const txt = require('../helpers/txt')

const dividerWithText = require('../molecules/dividerWithText')
const quoteRow = require('../molecules/quoteRow')

const heroHeader = require('../organisms/heroHeader')
const textBoxOverImage = require('../organisms/textBoxOverImage')

const textBoxTitle = 'Empowering Community Health Workers Like Janat'

const heroText =  h`
  <span>Living Goods Saves and <br class='sm-hide'>
  Improves Lives Door-to-Door</span>
`

const images = [
  'https://i.ytimg.com/vi/Wg8ZX62XpmY/maxresdefault.jpg',
  'http://www.goodventures.org/images/organizations/Living-Goods-2.jpeg',
  'https://www.openphilanthropy.org/sites/default/files/styles/medium/public/grants/Living-Goods-2014.jpeg?itok=sCuPBCZT',
  'https://i.vimeocdn.com/video/532001913_780x439.jpg',
  'https://www.lemelson.org/sites/default/files/images/GOOD%20Living%20Goods%20Oct_%202010_05.jpg'
]

const home = (state) => {
  return h`
    <div>
      ${heroHeader({
        text: heroText,
        imgUrl: images[0],
        btnLink: '#',
        btnText: 'Join Us'
      })}
      <div class='py-2'>
        ${dividerWithText('What we do')}
      </div>
      ${textBoxOverImage({
        title: textBoxTitle,
        imgUrl: images[1],
        btnText: 'See more',
        link: '#',
        text: txt(3),
        direction: 'right'
      })}
      <div class='col-12 py-3'></div>
      ${textBoxOverImage({
        title: textBoxTitle,
        imgUrl: images[2],
        btnText: 'See more',
        link: '#',
        text: txt(3),
        direction: 'left'
      })}
      <div class='col-12 py-3'></div>
      ${quoteRow({
        quote: "She is more then just a health worker. She is like my mother.",
        quotee: "Aisah - Living Goods clicnet - Uganda",
        imgUrl: images[3],
      })}
      <div class='pt-2 pb-1'>
        ${dividerWithText('Why it works')}
        <p class='mx-auto mb-0 center'>Combining best practices from business and public health to drive life-saving results.</p>
      </div>
    </div>
  `
}

module.exports = home
