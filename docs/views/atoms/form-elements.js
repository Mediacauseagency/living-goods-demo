const h = require('choo/html')

const button = (className, text) => h`
  <button class='${className}'>${text}</button>
`

const buttonClasses = ['btn--orange', 'btn--blue', 'btn--white']

const buttons = h`
  <div class='flex flex-wrap'>
    ${buttonClasses.map(className => h`
      <div class='col-4 md-col-6 p-1'>
        <div class="${className === 'btn--white' ? 'bg-scrim p-1' : ''}">
          ${button(className, 'Button')}
        </div>
        <p class='mono sub'>${className}</p>
      </div>`
    )}
  </div>
`

const inputs = h`
  <div class='flex flex-wrap p-05'>
    ${['First name', 'Last name', 'Email'].map(name => h`
      <div class='col-4 md-col-6 sm-col-12 p-05'>
        <label>${name}</label>
        <input type='text' placeholder='${name}'>
      </div>
    `)}
  </div>
`

const section = (title, content) => h`
  <section class='pb-1'>
    <h3 class='px-1'>${title}</h3>
    ${content}
  </section>
`

module.exports = h`
  <div>
    ${section('Buttons', buttons)}
    ${section('Inputs', inputs)}
  </div>
`

