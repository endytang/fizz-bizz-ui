var playbutton = document.getElementById('play-button')
var fizzbizztag = document.getElementById('fizzbizz')

playbutton.onclick = function () {
  var button = document.querySelector('#play-button')

  if (!button.classList.contains('reset')) {
    console.log('test1')
    button.innerHTML = '<i class="fa fa-refresh fa-spin" style="font-size:24px"></i> Reset'
    button.classList.add('reset')
    fizzbizztag.innerHTML = fizzbizz.join(', ')
  } else {
    console.log('test2')
    button.innerHTML = '<i style="font-size:24px" class="fa">&#xf04b;</i> Play'
    button.classList.remove('reset')
    fizzbizztag.innerHTML = numbers.join(', ')
  }
}

const Number = 100
const arr = Array.from({ length: Number }, (_, index) => index + 1)
const numbers = arr.map((_, index) => `<span>${index + 1}</span>`)
const fizzbizz = arr.map(function (originalNumber, index) {
  if (originalNumber % 5 == 0 && originalNumber % 3 == 0) {
    return '<b><span class=\'text-red\'>FizzBizz</span></b>'
  } else if (originalNumber % 3 == 0) {
    return '<span class=\'text-blue\'>Fizz</span>'
  } else if (originalNumber % 5 == 0) {
    return '<span class=\'text-green\'>Bizz</span>'
  }
  return originalNumber
})

document.getElementById('fizzbizz').innerHTML = numbers.join(', ')

var move = document.getElementById('move-button')
var leftposition = 0
let intervalfunction

move.onclick = function () {

  if (!move.classList.contains('reset')) {
    move.classList.add('reset')
    move.innerHTML = 'Reset'
    intervalfunction = setInterval(function () {
      leftposition = leftposition + 1
      fizzbizztag.style.left = `-${leftposition}px`
    }, 25)

  } else {

    move.classList.remove('reset')
    move.innerHTML = 'move'
    clearInterval(intervalfunction)
  }

}