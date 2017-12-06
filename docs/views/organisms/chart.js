const h = require('choo/html')

const chart = obj => h`
  <div class='px-1 container flex' data-in-view='false'>
    <div class='col-6 pr-3'>
      <a class='color-blue-1 hover-underline' title='${obj.title}' href='${obj.link}'>
        <h2 class='h1'>${obj.title}</h2>
      </a>
      <p class='mb-2'>${obj.text}</p>
      <a class='btn btn--orange' href='${obj.link}' title='${obj.title}'>Learn more</a>
    </div>
    <div class='col-6 in-view-fade-in-up' data-in-view='false'>
      <canvas data-chart='line' 
        data-labels='apple, orange, pear, guava'
        data-value='34, 56, 125, 45'></canvas>
    </div>
  </div>
`

module.exports = chart

