var postcss = require('postcss')
var strict = require('./')

var css = '.class{padding:10px !important;}.bar,.hoge{font-size:12px;}'

var res = postcss().use(strict.postcss).process(css).css
