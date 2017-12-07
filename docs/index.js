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

const initNav = () => {
  const toggler = document.querySelector('[data-toggle-menu]')
  const menu = document.querySelector('[data-menu]')
  toggler.addEventListener('click', () => {
    const attr = menu.getAttribute('data-menu') === 'closed' ? 'open' : 'closed'
    menu.setAttribute('data-menu', attr)
  })
  window.document.body.addEventListener('click', (ev) => {
    if(ev.target.getAttribute('data-toggle-menu')) return
    menu.setAttribute('data-menu', 'closed')
  })
}

const addSideEffects = () => {
  toggleInView('[data-in-view]', (elm, inView) => {
    elm.setAttribute('data-in-view', inView)
  })
  toggleInView('[data-chart]', initChart)
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
    toggleInView('[data-chart]', initChart)
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

const toggleInView = (selector, cb) => {
  const elms = document.querySelectorAll(selector)
  elms.forEach((elm, i) => {
    const scrollTop = window.document.body.scrollTop + window.innerHeight
    const elmTop = findOffset(elm)
    const inView = scrollTop >= elmTop
    cb(elm, inView, i)
  })
}

const initChart = (elm, inView, i) => {
  let ctx
  let chart 
  const dataA = [5234, 6234, 8234, 10123, 13234, 14644, 16445, 20034]
  const dataB = [5234, 8234, 10234, 14123, 17234, 20644, 22445, 24034]
  const chartKey = `_chart_${i}`

  if (!window[chartKey] && !window[chartKey + '_update']) {
    ctx = elm.getContext('2d')
    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"],
        datasets: [{
          label: 'Data A',
          data: dataA.map(x => 0),
          backgroundColor: 'rgba(0,0,0,0.05)',
          borderColor: '#44ade2'
        },
        {
          label: 'Data B',
          data: dataB.map(x => 0),
          backgroundColor: 'rgba(0,0,0,0.05)',
          borderColor: '#f47a44'
        }]
      },
      options: {
        scaleBeginAtZero: true,
        animation: {
          duration: 3000
        }
      }
    })
    window[chartKey] = chart
  }

  if (!inView && window[chartKey + '_populated']) {
    const savedChart = window[chartKey]
    savedChart.data.datasets[0].data = dataA.map(x => 0)
    savedChart.data.datasets[1].data = dataB.map(x => 0)
    savedChart.update()
    window[chartKey + '_populated'] = false
  }
  if (inView && !window[chartKey + '_populated']) {
    const savedChart = window[chartKey]
    savedChart.data.datasets[0].data = dataA
    savedChart.data.datasets[1].data = dataB
    savedChart.update()
    window[chartKey + '_populated'] = true
  }

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


