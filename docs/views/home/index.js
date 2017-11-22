const h = require('choo/html')

const home = (state) => {
  return h`
    <div>
      <h1>Home (todo)</h1>
    </div>
  `
}

module.exports = home
