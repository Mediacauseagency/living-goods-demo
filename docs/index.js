const h = require('choo/html')
const devtools = require('choo-devtools')
const choo = require('choo')
const home = require('./views/home')
const atoms = require('./views/atoms')
const {map} = require('ramda')

const views = [
  {
    route: '/',
    title: 'Home',
    view: home
  },
  {
    route: '/atoms',
    title: 'Atoms',
    view: atoms
  }
]

const wrapper = view => (state, emit) => {
  const li = v => h`
    <li class='inline-block pr-1'>
      <a class="${state.href.replace('/', '') === v.route.replace('/', '') ? 'h1' : ''}"
        href='${v.route}' title='${v.title}'>
        ${v.title}
      </a>
    </li>
  `
  return h`
    <div>
      <div>
        <ul class='list-reset p-1 m-0'>
          ${map(li, views)}
        </ul>
      </div>
      ${view(state, emit)}
    </div>
  `
}


const app = choo()
app.use(devtools())
app.route('*', home)
map(v => app.route(v.route, wrapper(v.view)), views)
app.mount('#js-container')

