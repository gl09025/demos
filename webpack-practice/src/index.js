import _ from 'lodash'
import $ from 'jquery'
import './index.scss'


var img1 = document.createElement("img");
img1.src = require("./1.jpg");
document.body.appendChild(img1);


function component() {
  var $div = $('<div></div>')
  $div.html(_.join(['Hello','webpack'], ' '))
  return $div
}
 
$(document.body).append(component());
