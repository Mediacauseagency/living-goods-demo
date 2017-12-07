const h = require('choo/html')

const chart = obj => h`
  <div class='px-1 container'>
    <h2 class='center mt-0 pb-1 md-pb-0 sm-h3 color-blue-1'>${obj.title}</h2> 
    <div class='flex flex-align-center flex-wrap'>
      <div class='col-5 pr-3 md-col-12 md-pr-0 md-pb-3'>
        <p class='pb-05'>${obj.text}</p>
        <a class='caps-link' href='${obj.link}' title='${obj.title}'>Learn more</a>
      </div>
      <div class='col-7 md-col-12'>
        <canvas data-chart='line' 
          data-labels='apple, orange, pear, guava'
          data-value='34, 56, 125, 45'></canvas>
      </div>
    </div>
  </div>
`

module.exports = chart

