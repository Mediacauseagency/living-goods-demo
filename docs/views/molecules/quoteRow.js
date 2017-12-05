const h = require('choo/html')

const quoteRow = ({quote, quotee, imgUrl}) => h`
  <div class='bg-cover relative' style='background-image: url(${imgUrl})'>
    <div class='container py-4 px-1 color-white relative z-1'>
      <div class='col-6 py-2'>
        <blockquote>${quote}</blockquote>
        <p class='align-right m-0 italic'>${quotee}</p>
      </div>
    </div>
    <div class='bg-scrim fit-absolute'></div>
  </div>
`

module.exports = quoteRow
