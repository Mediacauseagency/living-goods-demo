const h = require('choo/html')
const devtools = require('choo-devtools')
const choo = require('choo')

const addSideEffects = require('../js/addSideEffects')

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

const store = (state, emitter) => {
  emitter.on('DOMContentLoaded', addSideEffects)
  emitter.on('render', () => window.setTimeout(addSideEffects, 100))
}

const app = choo()
if (!isProduction) { app.use(devtools()) }
app.use(store)
app.route('*', mainView)
app.mount('#js-container')


