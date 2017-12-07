const h = require('choo/html')

const insight = ({text, link, imgUrl}) => h`
  <div class='bg-cover relative' style='background-image: url(${imgUrl})'>
    <div data-in-view='false' class='in-view-fade-in-up flex container py-4 md-py-2 px-1 color-white relative z-1'>
      <div class='col-7 md-col-4 sm-hide'></div>
      <div class='py-2 col-5 md-col-8 sm-col-12'>
        <p class='m-0 uppercase sub'>Key Insight</p>
        <h2 class='mt-1 pb-2 normal sm-h3'>${text}</h2>
        <a class='btn btn--white'>Read more</a>
      </div>
    </div>
    <div class='bg-scrim fit-absolute'></div>
  </div>
`

module.exports = insight
