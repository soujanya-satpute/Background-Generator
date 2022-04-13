var codeBlock = document.querySelector('code')
var color1 = document.querySelector('.color1')
var color2 = document.querySelector('.color2')
var color3 = document.querySelector('.color3')
var body = document.getElementById('Gradient')
// deciding order gradient type
var rightTop = document.querySelector('.Right-top')
var rightBottom = document.querySelector('.Right-bottom')
var right = document.querySelector('.Right')
var left = document.querySelector('.Left')
var leftBottom = document.querySelector('.Left-bottom')
var leftTop = document.querySelector('.Left-top')
var circular = document.querySelector('.circular')
var bgStyle

rightTop.addEventListener('click', function () {
  bgStyle = 'to right top'
  setGradient(bgStyle)
})
rightBottom.addEventListener('click', function () {
  bgStyle = 'to right bottom'
  setGradient(bgStyle)
})
right.addEventListener('click', function () {
  bgStyle = 'to right'
  setGradient(bgStyle)
})
left.addEventListener('click', function () {
  bgStyle = 'to left'
  setGradient(bgStyle)
})
leftBottom.addEventListener('click', function () {
  bgStyle = 'to left bottom'
  setGradient(bgStyle)
})
leftTop.addEventListener('click', function () {
  bgStyle = 'to left top'
  setGradient(bgStyle)
})
circular.addEventListener('click', function () {
  bgStyle = 'circle'
  setGradient(bgStyle)
})

function setGradient(bgStyle) {
  if (bgStyle === 'to right top' || bgStyle === undefined) {
    body.style.background =
      'linear-gradient(to right top, ' +
      color1.value +
      ', ' +
      color2.value +
      ',' +
      color3.value
    codeBlock.textContent = body.style.background + ';'
    console.log('bg style is right top')
  } else if (bgStyle === 'to right bottom') {
    body.style.background =
      'linear-gradient(to right bottom, ' +
      color1.value +
      ', ' +
      color2.value +
      ',' +
      color3.value
    codeBlock.textContent = body.style.background + ';'
    console.log('bg style is right bottom')
  } else if (bgStyle === 'to right') {
    body.style.background =
      'linear-gradient(to right , ' +
      color1.value +
      ', ' +
      color2.value +
      ',' +
      color3.value
    codeBlock.textContent = body.style.background + ';'
    console.log('bg style is right ')
  } else if (bgStyle === 'to left') {
    body.style.background =
      'linear-gradient(to left , ' +
      color1.value +
      ', ' +
      color2.value +
      ',' +
      color3.value
    codeBlock.textContent = body.style.background + ';'
    console.log('bg style is left ')
  } else if (bgStyle === 'to left bottom') {
    body.style.background =
      'linear-gradient(to left bottom , ' +
      color1.value +
      ', ' +
      color2.value +
      ',' +
      color3.value
    codeBlock.textContent = body.style.background + ';'
    console.log('bg style is to left bottom ')
  } else if (bgStyle === 'to left top') {
    body.style.background =
      'linear-gradient(to left top , ' +
      color1.value +
      ', ' +
      color2.value +
      ',' +
      color3.value
    codeBlock.textContent = body.style.background + ';'
    console.log('bg style is to left top ')
  } else if (bgStyle === 'circle') {
    body.style.background =
      'radial-gradient(circle , ' +
      color1.value +
      ', ' +
      color2.value +
      ',' +
      color3.value
    codeBlock.textContent = body.style.background + ';'
    console.log('bg style is to left top ')
  }
}
color1.addEventListener('input', function () {
  setGradient(bgStyle)
})
color2.addEventListener('input', function () {
  setGradient(bgStyle)
})
color3.addEventListener('input', function () {
  setGradient(bgStyle)
})
