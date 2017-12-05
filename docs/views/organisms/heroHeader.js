const h = require('choo/html')
const topNav = require('./topNav')
const img = require('../helpers/randomImage')

const heroHeader = ({text, imgUrl, btnLink, btnText}) => h`
  <div class='bg-cover relative bg-grey-1' style='background-image: url(${imgUrl})'>
    <div class='z-1 relative'>
      ${topNav}
      <div class='py-4 container px-1 fade-in'>
        <div class='py-4 md-py-2 sm-py-0'>
          <h1 class='large md-h1 color-white m-0'>
            ${text}
          </h1>
          <div class='pt-2'>
            <a class='btn btn--white' href='${btnLink}' title='${btnText}'>${btnText}</a>
          </div>
        </div>
      </div>
    </div>
    <div class='bg-scrim fit-absolute'></div>
  </div>
`

module.exports = heroHeader
