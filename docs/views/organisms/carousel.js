const h = require('choo/html')


const images = (obj, i) => {
  return h`
  <div class='js-carousel__image ${i === 0 ? "fade-in-quick" : "fade-out-quick"} fit-absolute'>
    <div class='aspect aspect-3x2'>
      <div class='bg-cover bg-scrim' 
        title='${obj.title}' 
        style='background-image: url(${obj.imgUrl})'>
      </div>
    </div>
  </div>
  `
}

const icons = (obj, i) => h`
  <div class='js-carousel__icon cursor-pointer px-1 center ${i === 0 ?
  "color-orange-1"
  : "color-blue-1"}'>
    <i class='x-large icon-type-custom icon-${obj.icon}'></i>
    <p class='mb-0 uppercase tiny kern'>${obj.title}</p>
  </div>
`

const carousel = data => h`
  <div class='carousel flex px-1 container' data-in-view='false'>
    <div class='carousel__images col-6'>
      <div class='relative fade-in-delay z-1'>
        ${data.map(images)}
      </div>
      <div class='aspect aspect-3x2 fade-in-quick'>
        <div class='bg-scrim'></div>
      </div>
    </div>
    <div class='carousel__text col-6'>
      <div class='flex'>
        ${data.map(icons)}
      </div>
      
    </div>
  </div>
`

module.exports = carousel
