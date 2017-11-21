const h = require('choo/html')
const devtools = require('choo-devtools')
const choo = require('choo')
const home = require('./views/home')
const atoms = require('./views/atoms')

const isProduction = process.env.NODE_ENV === 'production'

const views = [
  {
    title: 'Home',
    view: home
  },
  {
    title: 'Atoms',
    view: atoms
  }
]

const wrapper = (state, emit) => {
  const tab = Number(state.query.tab || 0)

  const li = (v, i) => h`
    <li class='inline-block pr-1'>
      <a class="${tab === i ? 'h1' : ''}" href='/?tab=${i}' title='${v.title}'>
        ${v.title}
      </a>
    </li>
  `

  console.log(state.query)
  return h`
    <div>
      <div>
        <ul class='list-reset p-1 m-0'>
          ${views.map(li)}
        </ul>
      </div>
      ${views[tab].view(state, emit)}
    </div>
  `
}


const app = choo()
if (!isProduction) { app.use(devtools()) }
app.route('*', wrapper)
app.mount('#js-container')

