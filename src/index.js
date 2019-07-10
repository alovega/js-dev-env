import '../src/index.css'

import numeral from 'numeral';
const courseValue = numeral(1000).format('sh0,0.00')

console.log(`I would pay ${courseValue} for this awesome course`)