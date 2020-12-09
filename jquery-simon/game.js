const buttonColors = ['red', 'blue', 'green', 'yellow']
let gamePattern = []
let userPattern = []

let started = false
let level = 0

// Listen for a keypress to start the game
$(document).on('keypress', function () {
  if (!started) {
    $('#level-title').text('Level ' + level)
    nextSequence()
    started = true
  } else {
    console.log('Game already started.')
  }
})

// Listen for button click
$("[type='button']").on('click', function () {
  const userChosenColor = $(this).attr('id')
  userPattern.push(userChosenColor)

  animatePress(userChosenColor)
  playSound(userChosenColor)

  checkAnswer(userPattern.length - 1)
})

function animatePress(color) {
  $('#' + color).addClass('pressed')
  setTimeout(function () {
    $('#' + color).removeClass('pressed')
  })
}

function checkAnswer(currentLevel) {
  // correct answer
  if (gamePattern[currentLevel] === userPattern[currentLevel]) {
    if (gamePattern.length === userPattern.length) {
      setTimeout(function () {
        nextSequence()
      }, 1000)
    }
  } else {
    // wrong answer
    $('body').addClass('game-over')
    setTimeout(function () {
      $('body').removeClass('game-over')
    }, 200)

    playSound('wrong')

    $('h1').html('Game Over. Press Any Key to Restart')
    startOver()
  }
}

// Select a random button
function nextSequence() {
  userPattern = []
  level++
  $('#level-title').text('Level ' + level)

  const randomNumber = Math.floor(Math.random() * 4)
  const randomColor = buttonColors[randomNumber]
  gamePattern.push(randomColor)

  $('#' + randomColor)
    .fadeOut(100)
    .fadeIn(100)

  playSound(randomColor)
}

function playSound(name) {
  const audio = new Audio('sounds/' + name + '.mp3')
  audio.play()
}

function startOver() {
  level = 0
  gamePattern = []
  started = false
  userPattern = []
}
