const h = require('choo/html')
const devtools = require('choo-devtools')
const choo = require('choo')

const isProduction = process.env.NODE_ENV === 'production'

const views = [
  {
    title: 'Atoms',
    view: require('./views/atoms/index')
  },
  //{
    //title: 'Molecules',
    //view: require('./views/molecules/index')
  //},
  //{
    //title: 'Organisms',
    //view: require('./views/organisms/index')
  //},
  {
    title: 'Home',
    view: require('./views/home/index')
  }
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
  return h`
    <div>
      <ul class='list-reset m-0 bg-grey-1'>
        <div class='container'>
          ${views.map(li)}
        </div>
      </ul>
      <main>
        ${views[tab].view(state, emit)}
      </main>
    </div>
  `
}

const addSideEffects = () => {
  toggleInView('[data-in-view]')
  let i = 0
  window.document.addEventListener('scroll', () => {
    // debounce dom calculations to every five ticks
    // to prevent scrolling jank
    i += 1
    if (i % 5 !== 0) return
    toggleInView('[data-in-view]')
  })
}

const toggleInView = (selector) => {
  const elms = document.querySelectorAll(selector)
  elms.forEach(elm => {
    const scrollTop = window.document.body.scrollTop + window.innerHeight
    const elmTop = elm.offsetTop 
    console.log({elmTop, scrollTop})
    elm.setAttribute('data-in-view', scrollTop >= elmTop)
  })
}

const store = (state, emitter) => {
  emitter.on('setFonts', (fontStyle) => {
    state.fontStyle = fontStyle
    emitter.emit('render')
  })
  emitter.on('DOMContentLoaded', addSideEffects)
  emitter.on('render', addSideEffects)
}

const app = choo()
if (!isProduction) { app.use(devtools()) }
app.use(store)
app.route('*', mainView)
app.mount('#js-container')


