const h = require('choo/html')

const dividerWithText = (text) => h`
  <div class='my-1 dividerWithText center mx-auto max-width-3'>
    <h4 class='dividerWithText__text bump md-h4 m-0 relative z-1 px-3 md-px-2 inline-block uppercase kern'>${text}</h4>
  </div>
`

module.exports = dividerWithText
