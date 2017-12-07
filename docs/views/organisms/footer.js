const h = require('choo/html')

const li = ({text, link}) => h`
  <li class='pb-05'>
    <a class='hover-underline' href='${link}' title='${text}'>
      ${text}
    </a>
  </li>
`

const listCol = ({title, links}) => h`
  <div class='pr-3 flex-grow-1 md-col-6 md-pb-1 sm-col-12 sm-pr-0'>
    <h3 class='sub uppercase mt-0 sub pb-05'>${title}</h3>
    <ul class='list-reset sub'>
      ${links.map(li)}
    </ul>
  </div>
`

const buttonCol = h`
  <div class='md-col-12'>
    <p class='mt-0 center'>Social links go here</p>
    <div class='md-flex md-flex-wrap'>
      <div class='md-col-6 md-pr-1 sm-col-12 sm-p-0'>
        <button class='btn--white md-col-12'>Donate</button>
      </div>
      <div class='md-col-6 pt-1 md-pt-0 md-pl-1 sm-col-12 sm-p-0 sm-mt-2'>
        <button class='btn--white md-col-12'>Donate</button>
      </div>
    </div>
  </div>
`

const footer = () => h`
  <footer class='bg-blue-3'>
    <div class='container px-1 py-4 md-py-3 sm-py-2 color-white'>
      <p class='bump bold mb-1'>Email Newsletter</p>
      <form class='flex flex-wrap'>
        <div class='flex col-5 md-col-12'>
          <input class='border-color-white mr-1 md-mr-0' placeholder='Name'>
        </div>
        <div class='flex col-7 md-col-12 md-pt-1 sm-pb-1'>
          <input class='border-color-white mr-1 sm-mr-0' placeholder='Email'>
          <button class='btn--white sm-hide'>Submit</button>
        </div>
        <button class='btn--white sm-up-hide'>Submit</button>
      </form>
      <div class='py-3 sm-py-2'>
        <img class='width-1' src='./assets/svgs/logo-white-temp.svg'>
      </div>
      <div class='flex md-flex-wrap border-bottom border-color-white border-width-1 pb-2'>
        <div class='flex md-flex-wrap flex-grow-2'>
          ${listCol({
            title: 'What we do',
            links: [
              {text: 'Link', link: '#'},
              {text: 'Link', link: '#'},
              {text: 'Link', link: '#'},
              {text: 'Link', link: '#'},
              {text: 'Link', link: '#'}
            ]
          })}
          ${listCol({
            title: 'Impact',
            links: [
              {text: 'Link', link: '#'},
              {text: 'Link', link: '#'},
              {text: 'Link', link: '#'},
              {text: 'Link', link: '#'},
            ]
          })}
          ${listCol({
            title: 'Who we are',
            links: [
              {text: 'Link', link: '#'},
              {text: 'Link', link: '#'},
              {text: 'Link', link: '#'},
              {text: 'Link', link: '#'}
            ]
          })}
          ${listCol({
            title: 'Insights',
            links: [
              {text: 'Link', link: '#'},
              {text: 'Link', link: '#'},
            ]
          })}
        </div>
        <div class='flex md-flex-none md-col-12 flex-grow-1 flex-justify-center'>
          ${buttonCol}
        </div>
      </div>
      <div class='tiny pt-2'>
        <span>Copyright stuff goes here</span>
      </div>
    </div>
  </footer>
`

module.exports = footer
