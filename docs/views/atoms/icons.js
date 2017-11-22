const h = require('choo/html')

const custom = [
  'baby',
  'bowl',
  'cost',
  'family',
  'phone',
  'pill',
  'results',
  'syringe',
  'training'
]

const social = [
  'email',
  'share',
  'facebook',
  'instagram',
  'twitter',
  'youtube'
]

const icon = (type) => (name) => h`
  <div class='col-3 md-col-4 sm-col-6 px-1 pb-3'>
    <i class='${type} icon-${name} xx-large'></i>
    <p class='mono mb-0 sub'>${type}</p> 
    <p class='mono m-0 sub pt-05'>icon-${name}</p>
  </div>
`

module.exports = h`
  <div>
    <h3 class='px-1 mt-0'>Custom icons:</h3>
    <div class='flex flex-wrap pt-1'>
      ${custom.map(icon('icon-type-custom'))}
    </div>
    <h3 class='px-1'>Social icons:</h3>
    <div class='flex flex-wrap pt-1'>
      ${social.map(icon('icon-type-social'))}
    </div>
  </div>
`
