const h = require('choo/html')


const images = (obj, i) => {
  return h`
  <div class='js-carousel__image ${i === 0 ? "fade-in" : "fade-out"}
  fit-absolute'>
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
  <div class='js-carousel__icon cursor-pointer px-1 center'>
    <i class='xx-large icon-type-custom icon-${obj.icon}'></i>
    <p class='mb-0 uppercase tiny'>${obj.title}</p>
  </div>
`

const carousel = data => h`
  <div class='carousel flex px-1 container in-view-fade-in' data-in-view='false'>
    <div class='carousel__images col-6 relative'>
      ${data.map(images)}
      <div class='aspect aspect-3x2 invisible'>
        <div></div>
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
