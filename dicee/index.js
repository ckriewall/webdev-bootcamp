/* Constants */
const multiplier = 6
const imgPath = 'images/dice'

/* Return a random number 1-6 */
const roll = () => {
  let results = Math.floor(Math.random() * multiplier) + 1
  return results
}

/* Roll one die per player */
const player1 = roll().toString()
const player2 = roll().toString()

/* Determine the winner */
const gameOutcome = () => {
  if (player1 > player2) {
    return '💪 Player 1'
  } else if (player2 > player1) {
    return 'Player 2 💪'
  } else if (player1 === player2) {
    return 'Roll again.'
  }
}

/* Get image elements from the DOM */
const img1 = document.getElementsByClassName('img1')
const img2 = document.getElementsByClassName('img2')

/* Match the shown dice image to the rolled dice */
img1[0].setAttribute('src', imgPath + player1 + '.png')
img2[0].setAttribute('src', imgPath + player2 + '.png')

/* Display the winner */
document.querySelector('h1').innerHTML = gameOutcome()
