
const initCarousel = () => {
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

module.exports = initCarousel
