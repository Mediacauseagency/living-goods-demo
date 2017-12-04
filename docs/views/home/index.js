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
  <li class='px-1 sub'>
    <a class='color-white hover-color-orange-1 uppercase border-width-1 ${o.highlight ? "border-bottom border-color-orange-1": "" }'
       href='${o.url}' 
       title='${o.title}'>
        ${o.title}
    </a>
  </li>
`

const nav = (navLinks) => h`
  <nav class='container p-1 topNav flex flex-align-center'>
    <img class='topNav__logo' src='./assets/svgs/logo-white-temp.svg'>
    <ul class='list-reset m-0 flex flex-justify-flex-end flex-grow-1'>
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
          <div class='py-4 container px-1'>
            <div class='py-4 md-py-2 sm-py-0'>
              <h1 class='x-large md-large sm-h1 color-white m-0'>
                Living Goods Saves and <br>
                Improves Lives Door-to-Door
              </h1>
              <div class='pt-2'>
                <a class='btn btn--white'>Join Us</a>
              </div>
            </div>
          </div>
        </div>
        <div class='bg-scrim fit-absolute'></div>
      </div>
    </div>
  `
}

module.exports = home
