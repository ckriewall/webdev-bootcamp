/* 
JQuery selectors select ALL matching elements
*/

// Apply CSS class(es)
$('button[name ="button1"]').addClass('big-blue margin-50')

// Remove a CSS class
$('button[name ="button1"]').removeClass('margin-50')

// Change text
$('button[name ="button1"]').html('💪Stay strong!')

// Click listeners
$('img').click(function () {
  $('img').attr('src', 'images/homer-2.png')
})

$('h1').on('click', function () {
  console.log('click eventListener using $(document).on')
})

$('#animateButton').on('click', function () {
  $('#animatedText').fadeToggle()
})

// Keypress listeners
$(document).keypress(function (e) {
  $('.output-text').html('You pressed ' + e.key)
})

$(document).on('keypress', function () {
  console.log('another keypress')
})
