const h = require('choo/html')

const textBoxOverImage = ({title, imgUrl, text, link, linkText, direction}) => h`
  <div data-in-view='false' class='container clearfix px-1 sm-px-0 relative textBoxOverImage textBoxOverImage--${direction}'>
    <div class=' textBoxOverImage__image'>
      <div class='aspect aspect-2x1'>
        <div class='bg-cover bg-scrim' style='background-image: url(${imgUrl})'></div>
      </div>
    </div>
    <div class='textBoxOverImage__textBoxWrapper'>
      <div class='inline-block bg-white sh-2 md-p-1 p-2 textBoxOverImage__textBox'> 
        <a href='${link}' title='${title}'> 
          <h2 class='mt-0 hover-underline md-h3 color-blue-1'>${title}</h2> 
        </a>
        <p class='pb-05'>${text}</p>
        <a href='${link}' title='${title}' class='caps-link'>
          ${linkText}
        </a>
      </div>
    </div>
  </div>
`

module.exports = textBoxOverImage
