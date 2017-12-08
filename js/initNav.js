const initNav = () => {
  const toggler = document.querySelector('[data-toggle-menu]')
  const menu = document.querySelector('[data-menu]')
  if(!toggler || !menu) return
  toggler.addEventListener('click', () => {
    const attr = menu.getAttribute('data-menu') === 'closed' ? 'open' : 'closed'
    menu.setAttribute('data-menu', attr)
  })
  window.document.body.addEventListener('click', (ev) => {
    if(ev.target.getAttribute('data-toggle-menu')) return
    menu.setAttribute('data-menu', 'closed')
  })
}

module.exports = initNav
