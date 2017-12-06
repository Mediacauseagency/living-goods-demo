const h = require('choo/html')

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
    <a class='color-white transition hover-color-orange-1 uppercase border-width-1 mx-1 sub ${o.highlight ? "border-bottom border-color-orange-1": "md-hide" }'
       href='${o.url}' 
       title='${o.title}'>
        ${o.title}
    </a>
  </li>
`

const nav = h`
  <nav class='container p-1 topNav flex flex-align-center'>
    <img class='topNav__logo' src='./assets/svgs/logo-white-temp.svg'>
    <ul class='list-reset m-0 flex flex-wrap flex-justify-flex-end flex-grow-1'>
      ${navLinks.map(navLink)}
    </ul>
  </nav>
`

module.exports = nav
