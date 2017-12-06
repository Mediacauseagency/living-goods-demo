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
    <a class='transition kern hover-color-orange-1 uppercase ${o.highlight ?
    "topNav__primaryLink": "topNav__secondaryLink" }'
       href='${o.url}' 
       title='${o.title}'>
        ${o.title}
    </a>
  </li>
`

const nav = h`
  <nav class='container p-1 topNav flex flex-align-center relative'>
    <img class='topNav__logo' src='./assets/svgs/logo-white-temp.svg'>
    <ul class='topNav__menu--horizontal list-reset m-0'>
      ${navLinks.map(navLink)}
    </ul>
    <a data-toggle-menu class='color-white'>MM</a>
    <ul data-menu='closed' class='topNav__menu--vertical list-reset m-0'>
      ${navLinks.map(navLink)}
    </ul>
  </nav>
`

module.exports = nav
