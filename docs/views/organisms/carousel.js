const h = require('choo/html')


const images = (obj, i) => h`
  <div class='js-carousel__image ${i === 0 ? "fade-in-quick" : "fade-out-quick"} fit-absolute'>
    <div class='aspect aspect-3x2'>
      <div class='bg-cover bg-scrim sh-1' 
        title='${obj.title}' 
        style='background-image: url(${obj.imgUrl})'>
      </div>
    </div>
  </div>
  `

const icons = (obj, i) => h`
  <div class='js-carousel__icon transition cursor-pointer px-2 col-3 hover-underline-parent center ${i === 0 ?
  "color-orange-1"
  : "color-blue-1"}'>
    <i class='xxx-large icon-type-custom icon-${obj.icon}'></i>
    <p class='mb-0 uppercase tiny kern hover-underline-child'>${obj.title}</p>
  </div>
`

const text = (obj, i) => h`
  <div class='js-carousel__text ${i === 0 ? "fade-in-quick" : "fade-out-quick"} fit-absolute'>
    <a class='color-blue-1 hover-underline' title='${obj.title}' href='${obj.link}'>
      <h2 class='h1'>${obj.title}</h2>
    </a>
    <p class='mb-2'>${obj.text}</p>
    <a class='btn btn--orange' href='${obj.link}' title='${obj.title}'>Learn more</a>
  </div>
`

const carousel = data => h`
  <div class='px-1 container'>
    <div class='flex max-width-3 mx-auto pb-3'>
      ${data.map(icons)}
    </div>
    <div class='flex'>
      <div class='col-6 in-view-fade-in' data-in-view='false'>
        <div class='relative fade-in-delay z-1'>
          ${data.map(images)}
        </div>
        <div class='aspect aspect-3x2'>
          <div></div>
        </div>
      </div>
      <div class='col-6 pl-3 py-1'>
        <div class='relative fade-in-delay'>
          ${data.map(text)}
        </div>
      </div>
    </div>
  </div>
`

module.exports = carousel
