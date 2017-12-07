const h = require('choo/html')


const section = obj => h`
  <div class='col-6 p-1 mdsm-col-12'>
    <a class='block aspect aspect-2x1'>
      <div class='bg-cover flex flex-align-center flex-justify-center' style='background-image: url(${obj.imgUrl})'>
        <div class='in-view-fade-in px-1 color-white relative z-1'>
            <h2 class='uppercase m-0 md-h3'>${obj.country}</h2>
        </div>
      </div>
      <div class='bg-scrim fit-absolute'></div>
    </a>
  </div>

`

const whereWeWork = data => h`
  <div class='container flex flex-wrap' data-in-view='false'>
    ${data.map(section)}
  </div>

`

module.exports = whereWeWork
