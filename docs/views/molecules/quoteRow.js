const h = require('choo/html')

const quoteRow = ({quote, quotee, imgUrl}) => h`
  <div class='bg-cover relative' style='background-image: url(${imgUrl})'>
    <div data-in-view='false' class='in-view-fade-in-up container py-4 px-1 color-white relative z-1'>
      <div class='py-2 md-py-1 sm-py-0 max-width-3'>
        <blockquote>${quote}</blockquote>
        <p class='align-right mb-0 italic'>${quotee}</p>
      </div>
    </div>
    <div class='bg-scrim fit-absolute'></div>
  </div>
`

module.exports = quoteRow
