// Load audio from /sounds directory
const crash = new Audio('sounds/crash.mp3')
const bass = new Audio('sounds/kick-bass.mp3')
const snare = new Audio('sounds/snare.mp3')
const tom1 = new Audio('sounds/tom-1.mp3')
const tom2 = new Audio('sounds/tom-2.mp3')
const tom3 = new Audio('sounds/tom-3.mp3')
const tom4 = new Audio('sounds/tom-4.mp3')

// Get an array of drum buttons from the DOM.
const buttons = document.querySelectorAll('.drum')

// BUTTON PRESS EVENT LISTENERS
for (i = 0; i < buttons.length; i++) {
  /*
  Loop through buttons array.
  Add click eventListener to each button.
  On click, run a function to play a different sound for each button.
  */
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    var buttonText = this.innerHTML
    animateButton(buttonText)
    makeSound(buttonText)
  })
}

/*
KEYBOARD EVENT LISTENERS
Add keydown eventListener to the entire document.
'keydown' emits an Event (e).
Event.key identifies the key which was pressed.
*/
document.addEventListener('keydown', function (e) {
  animateButton(e.key)
  makeSound(e.key)
})

/*
    HELPER FUNCTIONS
*/

// Simulate animation with a temporary class
function animateButton(currentKey) {
  const activeButton = document.querySelector('.' + currentKey)
  if (activeButton) {
    activeButton.classList.add('pressed')

    setTimeout(function () {
      activeButton.classList.remove('pressed')
    }, 100)
  }
}

// Play audio
function makeSound(currentKey) {
  switch (currentKey) {
    case 'w':
      crash.play()
      break
    case 'a':
      bass.play()
      break
    case 's':
      snare.play()
      break
    case 'd':
      tom1.play()
      break
    case 'j':
      tom2.play()
      break
    case 'k':
      tom3.play()
      break
    case 'l':
      tom4.play()
      break
    default:
      console.log("That key doesn't play audio.")
  }
}
