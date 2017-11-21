const h = require('choo/html')
const parameterize = require('../helpers/parameterize')


const sections = [
  {
    title: 'Colors',
    view: h`<div>asdf</div>` 
  }
]




const atoms = (state) => {
  const li = section => h`
    <li>
      <a class='link' href='#${parameterize(section.title)}'>${section.title}</a>
    </li>
  `

  return h`
    <div class='container px-1 py-2'>
      <h1 class='m-0'>Atoms</h1>
      <ul class='list-reset m-0 flex flex-wrap pt-2 pb-3'>
        ${sections.map(li)}
      </ul>
    </div>
  `
}

module.exports = atoms
