const h = require('choo/html')

const textBoxOverImage = ({title, imgUrl, text, link, btnText, direction}) => h`
  <div data-in-view='false' class='container clearfix px-1 relative textBoxOverImage textBoxOverImage--${direction}'>
    <div class=' textBoxOverImage__image'>
      <div class='aspect aspect-2x1'>
        <div class='bg-cover bg-grey-1' style='background-image: url(${imgUrl})'></div>
      </div>
    </div>
    <div class='textBoxOverImage__textBoxWrapper'>
      <div class='inline-block bg-white sh-2 md-p-1 p-2 textBoxOverImage__textBox'>
        <a href='${link}' title='${title}'>
          <h2 class='mt-0 h1 md-h2 color-blue-1'>${title}</h2>
        </a>
        <p class='pb-1'>${text}</p>
        <a href='${link}' title='${title}' class='btn btn--orange mb-05'>
          ${btnText}
        </a>
      </div>
    </div>
  </div>
`

module.exports = textBoxOverImage
