const chart = require('./chart')
const toggleInView = require('./toggleInView')
const initNav = require('./initNav')
const addScrollEvents = require('./addScrollEvents')
const initCarousel = require('./initCarousel')

const toggleInViewFunctions = () => {
  toggleInView('[data-in-view]', (elm, inView) => {
    elm.setAttribute('data-in-view', inView)
  })
  toggleInView('[data-chart]', chart)
}

const addSideEffects = () => {
  initNav()
  toggleInViewFunctions()
  addScrollEvents(toggleInViewFunctions)
  initCarousel()
}

module.exports = addSideEffects
