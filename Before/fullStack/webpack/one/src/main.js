import count from "./js/count.js";
import sum from './js/sum.js'

import './css/index.css'
import './less/index.less'
import './sass/index.scss'
import './stylus/index.styl'

console.log(count(100, 10))
console.log(sum([1, 2, 3, 20, 30, 40, 50]))


if(module.hot) {
  module.hot.accept("./js/count.js")
  module.hot.accept("./js/sum.js")
}
