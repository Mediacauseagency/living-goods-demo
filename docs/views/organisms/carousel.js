const h = require('choo/html')

const icons = (obj, i) => h`
  <div class='js-carousel__icon transition cursor-pointer px-2 md-px-1 col-3 hover-underline-parent center ${i === 0 ?
  "color-orange-1"
  : "color-blue-1"}'>
    <i class='xx-large md-x-large sm-large icon-type-custom icon-${obj.icon}'></i>
    <p class='bold mb-0 uppercase tiny kern hover-underline-child'>${obj.title}</p>
  </div>
`

const slide = (obj, i) => h`
  <div data-in-view='false' class='js-carousel__slide ${i === 0 ?
  "fade-in-quick" : "fade-out-quick hide"} container clearfix px-1 sm-px-0
  relative textBoxOverImage textBoxOverImage--right'>
    <div class=' textBoxOverImage__image'>
      <div class='aspect aspect-2x1'>
        <div class='bg-cover bg-scrim' style='background-image: url(${obj.imgUrl})'></div>
      </div>
    </div>
    <div class='textBoxOverImage__textBoxWrapper'>
      <div class='inline-block bg-white sh-2 md-p-1 p-2 textBoxOverImage__textBox'> 
        <a href='${obj.link}' title='${obj.title}'> 
          <h2 class='mt-0 hover-underline md-h3 color-blue-1'>${obj.title}</h2> 
        </a>
        <p class='pb-05'>${obj.text}</p>
        <a href='${obj.link}' title='${obj.title}' class='caps-link'>
          Learn more
        </a> 
      </div>
    </div>
  </div>
`

const carousel = data => h`
  <div>
    <div class='container'>
      <div class='flex max-width-3 mx-auto pb-3'>
        ${data.map(icons)}
      </div>
    </div>
    <div class='px-1 sm-px-0 container'>
      <div >
        ${data.map(slide)}
      </div>
    </div>
  </div>
`

module.exports = carousel
