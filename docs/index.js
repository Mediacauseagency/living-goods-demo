const h = require('choo/html')
const devtools = require('choo-devtools')
const choo = require('choo')
const Chart = require('../node_modules/chart.js')

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
  toggleInView('[data-in-view]')
  let i = 0
  window.document.addEventListener('scroll', () => {
    // debounce dom calculations to every five ticks
    // to prevent scrolling jank
    i += 1
    if (i % 3 !== 0) return
    toggleInView('[data-in-view]')
  })
  const icons = document.querySelectorAll('.js-carousel__icon')
  icons.forEach((icon, i) => {
    icon.addEventListener('click', () => {
      icons.forEach((elm) => {
        elm.classList.remove('color-orange-1')
        elm.classList.add('color-blue-1')
      })
      icon.classList.add('color-orange-1')
      toggleFades(document.querySelectorAll('.js-carousel__image'), i)
      toggleFades(document.querySelectorAll('.js-carousel__text'), i)
    })
  })
  const chartElms = document.querySelectorAll('[data-chart]')
  chartElms.forEach(elm => {
    const ctx = elm.getContext('2d')
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"],
        datasets: [{
          label: 'Data A',
          data: [5234, 6234, 8234, 10123, 13234, 14644, 16445, 20034],
          backgroundColor: 'rgba(0,0,0,0.05)',
          borderColor: '#44ade2'
        },
        {
          label: 'Data B',
          data: [5234, 8234, 10234, 14123, 17234, 20644, 22445, 24034],
          backgroundColor: 'rgba(0,0,0,0.05)',
          borderColor: '#f47a44'
        }]
      }
    })

  })

}

const toggleFades = (elms, i) => {
  elms.forEach((elm, ii) => {
    if(i !== ii) {
      elm.classList.remove('fade-in-quick')
      elm.classList.add('fade-out-quick')
    } else {
      elm.classList.remove('fade-out-quick')
      elm.classList.add('fade-in-quick')
    }
  })
}

const toggleInView = (selector) => {
  const elms = document.querySelectorAll(selector)
  elms.forEach(elm => {
    const scrollTop = window.document.body.scrollTop + window.innerHeight
    const elmTop = findOffset(elm)
    elm.setAttribute('data-in-view', scrollTop >= elmTop)
  })
}

const findOffset = elm => {
  if(elm.offsetTop) {
    return elm.offsetTop
  } else {
   return findOffset(elm.offsetParent)
  }
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


