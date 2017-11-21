const h = require('choo/html')
const parameterize = require('../helpers/parameterize')


// title: name of pages - string
// sections: array of objects ({title: 'Colors', view: colorsView})
const docs = (title, sections) => {
  const li = obj => h`
    <li class='col-4 md-col-6'>
      <a class='link' href='#${parameterize(obj.title)}'>${obj.title}</a>
    </li>
  `

  const section = obj => h`
    <section class='py-3 border-top border-width-1 border-color-grey' id='${parameterize(obj.title)}'>
      <h2 class='m-0 pb-2 px-1'>${obj.title}</h2>
      ${obj.view}
    </section>
  `

  return h`
    <div class='container py-2'>
      <h1 class='m-0 x-large px-1'>${title}</h1>
      <ul class='list-reset m-0 flex flex-wrap pt-2 pb-3 px-1'>
        ${sections.map(li)}
      </ul>
      ${sections.map(section)}
    </div>
  `
}

module.exports = docs
