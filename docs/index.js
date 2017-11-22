const h = require('choo/html')
const devtools = require('choo-devtools')
const choo = require('choo')

const isProduction = process.env.NODE_ENV === 'production'

const views = [
  {
    title: 'Atoms',
    view: require('./views/atoms/index')
  },
  {
    title: 'Molecules',
    view: require('./views/molecules/index')
  },
  {
    title: 'Organisisms',
    view: require('./views/organisms/index')
  },
  {
    title: 'Home',
    view: require('./views/home/index')
  }
]

const mainView = (state, emit) => {
  const tab = Number(state.query.tab || 0)

  const li = (v, i) => h`
    <li class='inline-block m-0'>
      <a class="sub inline-block p-05 mr-05 ${tab === i ? 'border-bottom border-width-2 border-color-orange' : 'opacity-075'}" 
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
      <div class='styleToggler'>
        <label>Toggle fonts</label>
        <select>
          <option value='serif-headers'>Serif headers</option>
          <option value='sans-headers'>Sans-serif headers</option>
        </select>
      </div>
    </div>
  `
}


const app = choo()
if (!isProduction) { app.use(devtools()) }
app.route('*', mainView)
app.mount('#js-container')

