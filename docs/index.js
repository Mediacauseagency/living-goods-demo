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
    title: 'Organisms',
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
      <a class="sub inline-block p-05 mr-05 ${tab === i ? 'border-bottom border-width-2 border-color-orange-1' : 'opacity-075'}" 
        href='?tab=${i}' 
        title='${v.title}'>
        ${v.title}
      </a>
    </li>
  `

  const setFonts = ev => emit('setFonts', ev.target.value)

  const fontStyle = state.fontStyle

  const styleTag = () => {
    let styles = ''
    switch (fontStyle) {
      case('sans-headers'):
        styles = `
          .sans, body {
            font-family: 'Merri'!important;
          }
          h1, h2, h3, h4, h5, h6, .serif {
            font-family: 'Merri_sans' !important;
          }
        `
        break
      case('serif-headers'):
        styles = `
          .sans, body {
            font-family: 'Merri_sans'!important;
          }
          h1, h2, h3, h4, h5, h6, .serif {
            font-family: 'Merri' !important;
          }
        `
        break
      case('all-sans'):
        styles = `
          h1, h2, h3, h4, h5, h6, .serif, .sans, body, .mono {
            font-family: 'Merri_sans'!important;
          }
        `
        break
      case('all-serif'):
        styles = `
          h1, h2, h3, h4, h5, h6, .serif, .sans, body, .mono {
            font-family: 'Merri'!important;
          }
        `
        break
    }
    return h`<style>${styles}</style>`
  }

  const option = (val, title, state) => {
    const selected = state.fontStyle === val
    return h`<option ${selected ? 'selected' : ''} value='${val}'>${title}</option>`
  }

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
        <select onchange=${setFonts}>
          ${option('', 'Default', state)}
          ${option('sans-headers', 'Sans-serif headers, serif body', state)}
          ${option('serif-headers', 'Serif headers, sans-serif body', state)}
          ${option('all-sans', 'All sans-serif', state)}
          ${option('all-serif', 'All serif', state)}
        </select>
      </div>
      ${fontStyle && styleTag()}
    </div>
  `
}

const store = (state, emitter) => {
  emitter.on('setFonts', (fontStyle) => {
    state.fontStyle = fontStyle
    emitter.emit('render')
  })
}

const app = choo()
if (!isProduction) { app.use(devtools()) }
app.use(store)
app.route('*', mainView)
app.mount('#js-container')

