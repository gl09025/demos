import _ from 'lodash'
import $ from 'jquery'
import './index.css'

function component() {
  var $div = $('<div></div>')
  $div.html(_.join(['Hello','webpack'], ' '))
  return $div
}
 
$(document.body).append(component());
