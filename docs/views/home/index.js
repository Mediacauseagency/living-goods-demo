const h = require('choo/html')
const img = require('../helpers/randomImage')

const navLinks = [
  {
    title: 'What we do',
    url: '#'
  },
  {
    title: 'Impact',
    url: '#'
  },
  {
    title: 'Who we are',
    url: '#'
  },
  {
    title: 'Insights',
    url: '#'
  },
  {
    title: 'Donate',
    url: '#',
    highlight: true
  },
  {
    title: 'Get Updates',
    url: '#',
    highlight: true
  }
]

const navLink = o => h`
  <li>
    <a class='color-white uppercase' href='${o.url}' title='${o.title}'>
      ${o.title}
    </a>
  </li>
`

const nav = (navLinks) => h`
  <nav>
    <img src='./assets/svgs/logo-white-temp.svg'>
    <ul class='list-reset m-0'>
     ${navLinks.map(navLink)}
    </ul>
  </nav>
`

const home = (state) => {
  return h`
    <div>
      <div class='bg-cover relative bg-blue-1' style='background-image: url(${img(1000, 600)})'>
        <div class='z-1 relative'>
          ${nav(navLinks)}
          <div class='py-4'>
            <h1 class='x-large md-large sm-h1 color-white m-0'>
              Living Goods Saves and <br>
              Improves Lives Door-to-Door
            </h1>
            <div class='pt-1'>
              <a class='btn btn--white'>Join Us</a>
            </div>
          </div>
        </div>
        <div class='bg-scrim fit-absolute'></div>
      </div>
    </div>
  `
}

module.exports = home
