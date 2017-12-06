const h = require('choo/html')

const img = require('../helpers/randomImage')
const randNumber = require('../helpers/randNumber')
const txt = require('../helpers/txt')

const dividerWithText = require('../molecules/dividerWithText')
const quoteRow = require('../molecules/quoteRow')
const insight = require('../molecules/insight')

const heroHeader = require('../organisms/heroHeader')
const textBoxOverImage = require('../organisms/textBoxOverImage')
const carousel = require('../organisms/carousel')
const chart = require('../organisms/chart')
const whereWeWork = require('../organisms/whereWeWork')

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
  'https://www.lemelson.org/sites/default/files/images/GOOD%20Living%20Goods%20Oct_%202010_05.jpg',
  'https://field.buzz/wp-content/uploads/2017/03/winwin.jpg',
  'https://media.licdn.com/media/AAEAAQAAAAAAAAdrAAAAJDhkMzVmNjQyLTQ4ZjAtNGU1Yy1hZDQ4LWM5MGFiYTliYjgyMQ.png',
  'http://breakthrough.unglobalcompact.org/site/assets/files/1139/xliving-goods-second-image.633x0-is.jpg.pagespeed.ic.9wcDQVdRTk.webp'
]

const home = (state) => {
  return h`
    <div class='bg-grey-1'>
      ${heroHeader({
        text: heroText,
        imgUrl: images[0],
        btnLink: '#',
        btnText: 'Join Us'
      })}
      <div class='py-3'>
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
      <div class='col-12 py-4'></div>
      ${textBoxOverImage({
        title: textBoxTitle,
        imgUrl: images[2],
        btnText: 'See more',
        link: '#',
        text: txt(3),
        direction: 'left'
      })}
      <div class='col-12 py-4'></div>
      ${quoteRow({
        quote: "She is more then just a health worker. She is like my mother.",
        quotee: "Aisah - Living Goods clicnet - Uganda",
        imgUrl: images[3],
      })}
      <div class='pt-3 pb-4'>
        ${dividerWithText('Why it works')}
        <p class='mx-auto mb-0 center'>Combining best practices from business and public health to drive life-saving results.</p>
      </div>
      ${carousel([
        {
          title: 'Digitally empowered',
          icon: 'phone',
          text: txt(4),
          imgUrl: images[0],
          link: '#'
        },
        {
          title: 'Results driven',
          icon: 'results',
          text: txt(3),
          imgUrl: images[1],
          link: '#'
        },
        {
          title: 'Trained and supported',
          icon: 'training',
          text: txt(2),
          imgUrl: images[2],
          link: '#'
        },
        {
          title: 'Cost effective',
          icon: 'cost',
          text: txt(5),
          imgUrl: images[3],
          link: '#'
        }
      ])}
      <div class='col-12 py-4'></div>
      ${chart({
        title: 'Backed By Evidence',
        text: txt(4),
        link: '#'
      })}
      <div class='col-12 py-4'></div>
      ${insight({
        text: "Living Goods Kenya Trains, Equips and Empowers 1,000 CHPs!",
        link: "#",
        imgUrl: images[4],
      })}
      <div class='pt-4 pb-3'>
        ${dividerWithText('Where we work')}
      </div>
      ${whereWeWork([
        {
          country: 'Uganda',
          imgUrl: images[5],
          link: '#'
        },
        {
          country: 'Kenya',
          imgUrl: images[7],
          link: '#'
        }
      ])}
      <div class='col-12 py-3'></div>
      <footer class='bg-blue-3'>
        <div class='container px-1 py-4 color-white'>
          <h1 class='m-0 py-4'>Footer content goes here...</h1>
        </div>
      </footer>
    </div>
  `
}

module.exports = home
