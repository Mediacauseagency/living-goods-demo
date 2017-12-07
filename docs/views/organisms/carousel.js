const h = require('choo/html')
const textBoxOverImage = require('./textBoxOverImage')

const icons = (obj, i) => h`
  <div class='js-carousel__icon transition cursor-pointer px-2 md-px-1 col-3 hover-underline-parent center ${i === 0 ?
  "color-orange-1"
  : "color-blue-1"}'>
    <i class='xx-large md-x-large sm-large icon-type-custom icon-${obj.icon}'></i>
    <p class='bold mb-0 uppercase tiny kern hover-underline-child'>${obj.title}</p>
  </div>
`

const slide = (obj, i) => h`
  <div class='js-carousel__slide ${i === 0 ? "" : "hide"}'>
    ${textBoxOverImage({
      title: obj.title,
      imgUrl: obj.imgUrl,
      text: obj.text,
      link: obj.link,
      linkText: 'Learn more',
      direction: 'right'
    })}
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
