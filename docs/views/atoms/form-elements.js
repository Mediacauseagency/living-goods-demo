const h = require('choo/html')

const button = (className, text) => h`
  <button class='${className}'>${text}</button>
`

const buttonClasses = ['btn--orange', 'btn--blue', 'btn--white']

const buttons = h`
  <div class='flex flex-wrap'>
    ${buttonClasses.map(className => h`
      <div class='col-4 md-col-6 pt-1 px-1'>
        <div class="${className === 'btn--white' ? 'bg-scrim p-1' : ''}">
          ${button(className, 'Button')}
        </div>
        <p class='mono sub'>${className}</p>
      </div>`
    )}
  </div>
`

const inputs = h`
  <div class='flex flex-wrap px-05'>
    ${['First name', 'Last name', 'Email'].map(name => h`
      <div class='col-4 md-col-6 sm-col-12 p-05'>
        <label>${name}</label>
        <input type='text' placeholder='${name}'>
      </div>
    `)}
  </div>
`

const searchInput = h`
  <div class='flex px-1 pt-05'>
    <input type='search' placeholder='Search'>
    <button class='btn--orange ml-1'>Search</button>
  </div>

`

const radio = h`
  <div class='flex px-1 pt-05'>
    <input type='search' placeholder='Search'>
    <button class='btn--orange ml-1'>Search</button>
  </div>
`

const section = (title, content) => h`
  <section class='pb-2'>
    <h3 class='px-1 mt-0'>${title}</h3>
    ${content}
  </section>
`

const radios = h`
  <div class='pt-05 px-1'>
    <fieldset>
      <input name='fruit' type='radio' id='fruit-radio-1'>
      <label for='fruit-radio-1'>Apple</label>
    </fieldset>

    <fieldset>
      <input name='fruit' type='radio' id='fruit-radio-2'>
      <label for='fruit-radio-2'>Banana</label>
    </fieldset>
  </div>
`

const checkbox = h`
  <div class='mt-05 px-1'>
    <input type='checkbox' id='check-1'>
    <label for='check-1'>Agree</label>
  </div>
`

const select = h`
  <div class='mt-05 px-1 max-width-1'>
    <select>
      <option>Apple</option>
      <option>Banana</option>
      <option>Pear</option>
    </select>
  </div>
`


module.exports = h`
  <div class='no-padding-last-child'>
    ${section('Buttons', buttons)}
    ${section('Text inputs', inputs)}
    ${section('Search input', searchInput)}
    ${section('Radios', radios)}
    ${section('Checkbox', checkbox)}
    ${section('Select', select)}
  </div>
`

