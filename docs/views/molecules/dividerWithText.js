const h = require('choo/html')

const dividerWithText = (text) => h`
  <div class='my-3 dividerWithText center mx-auto max-width-3'>
    <h4 class='bump md-h4 m-0 bg-white px-3 md-px-2 inline-block uppercase kern'>${text}</h4>
  </div>
`

module.exports = dividerWithText
