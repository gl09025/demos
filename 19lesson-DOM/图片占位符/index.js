var allImages = document.getElementsByTagName('img')
var img = allImages[0]
var url = img.getAttribute('data-src')
var tempImage = new Image()
tempImage.src = url
tempImage.onload = function(){
    img.src = url
}