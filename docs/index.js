const h = require('choo/html')
const devtools = require('choo-devtools')
const choo = require('choo')
const chart = require('../js/chart')
const toggleInView = require('../js/toggleInView')
const initNav = require('../js/initNav')

const isProduction = process.env.NODE_ENV === 'production'

const views = [
  {
    title: 'Atoms',
    view: require('./views/atoms/index')
  },
  {
    title: 'Home',
    view: require('./views/home/index')
  },
]

const mainView = (state, emit) => {
  const tab = Number(state.query.tab || 0)

  const li = (v, i) => h`
      <li class='inline-block m-0'>
        <a class="sub inline-block p-05 mr-05 ${tab === i ? 'border-bottom border-width-2 border-color-orange-1' : 'opacity-075'}" 
          href='?tab=${i}' 
          title='${v.title}'>
          ${v.title}
        </a>
      </li>
    `

  const viewWrapper = (obj, i, tab, state, emit) => h`
    <div class='${i !== tab ? "hide" : ""}'>
      ${obj.view(state, emit)}
    </div>
  `

  return h`
    <div>
      <ul class='list-reset m-0 bg-grey-1'>
        <div class='container'>
          ${views.map(li)}
        </div>
      </ul>
      <main>
        ${views.map((obj, i) => viewWrapper(obj, i, tab, state, emit))}
      </main>
    </div>
  `
}

const addSideEffects = () => {
  toggleInView('[data-in-view]', (elm, inView) => {
    elm.setAttribute('data-in-view', inView)
  })
  toggleInView('[data-chart]', chart)
  initNav()
  let i = 0
  window.document.addEventListener('scroll', () => {
    // debounce dom calculations to every five ticks
    // to prevent scrolling jank
    i += 1
    if (i % 3 !== 0) return
    toggleInView('[data-in-view]', (elm, inView) => {
      elm.setAttribute('data-in-view', inView)
    })
    toggleInView('[data-chart]', chart)
  })
  const icons = document.querySelectorAll('.js-carousel__icon')
  icons.forEach((icon, i) => {
    icon.addEventListener('click', () => {
      icons.forEach((elm) => {
        elm.classList.remove('color-orange-1')
        elm.classList.add('color-blue-1')
      })
      icon.classList.add('color-orange-1')
      toggleSlides(document.querySelectorAll('.js-carousel__slide'), i)
    })
  })
}

const toggleSlides = (elms, i) => {
  elms.forEach((elm, ii) => {
    const child = elm.querySelector('[data-in-view]')
    child.setAttribute('data-in-view', true)
    if(i !== ii) {
      elm.classList.add('fade-out-quick')
      elm.classList.remove('fade-in-quick')
      elm.classList.add('hide')
    } else {
      elm.classList.remove('hide')
      elm.classList.remove('fade-out-quick')
      elm.classList.add('fade-in-quick')
    }
  })
}

const store = (state, emitter) => {
  emitter.on('DOMContentLoaded', addSideEffects)
  emitter.on('render', () => window.setTimeout(addSideEffects, 100))
}

const app = choo()
if (!isProduction) { app.use(devtools()) }
app.use(store)
app.route('*', mainView)
app.mount('#js-container')


