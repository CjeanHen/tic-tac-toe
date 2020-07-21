const store = require('../store')

const signUpSuccess = response => {
  $('#message').text('Sign up successful!')
  $('form').trigger('reset')
}

const signUpFailure = response => {
  $('#message').text('Sign up failed!')
  $('form').trigger('reset')
}

const signInSuccess = response => {
  $('form').trigger('reset')
  $('#message').text('Welcome back!')
  store.user = response.user
  $('#authorized').show()
  $('.navbar').toggleClass('d-none')
  $('#unauthorized').hide()
}

const signInFailure = response => {
  $('#message').text('Sign in failed!')
  $('form').trigger('reset')
}

const signOutSuccess = response => {
  $('#message').text('Signed out!')
  $('form').trigger('reset')
  $('#unauthorized').show()
  $('#authorized').hide()
  $('.navbar').toggleClass('d-none')
}

const signOutFailure = response => {
  $('#message').text('Could not sign out!')
  $('form').trigger('reset')
}

const changePwSuccess = response => {
  $('#message').text('Password changed!')
  $('form').trigger('reset')
}

const changePwFailure = response => {
  $('#message').text('Password could not be changed!')
  $('form').trigger('reset')
}

const newGameSuccess = response => {
  $('#gameBoard').css('visibility', 'visible')
  store.game = response.game
  $('#message').text('X take your turn')
  $('.cells').html('<p> </p>')
  $('.cells').attr('data-isOpen', 'yes')
}

const newGameFailure = response => {
  $('#message').text('No new game created')
}

const takeTurnSuccess = response => {
  console.log(response)
  store.game = response.game
  store.game.__v % 2 === 1 ? $('#message').text('O take your tun') : $('#message').text('X take your turn')
  if (store.game.over === true) {
    $('#change-pw').show()
    store.game.__v % 2 === 1 ? $('#message').text('Game over! X won') : $('#message').text('Game over! O won')
  }
  if (store.game.__v === 9 && store.game.over === false) {
    $('#message').text('Game over! Tie')
    store.game.over = true
  }
}

const takeTurnFailure = response => {
  $('#message').text('Click "New Game" to play again')
}

const gamesPlayedSuccess = response => {
  $('#display-games').text(response.games.length)
}

const gamesPlayedFailure = response => {
  $('#display-games').text('Cannot display games played')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePwSuccess,
  changePwFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccess,
  newGameFailure,
  takeTurnSuccess,
  takeTurnFailure,
  gamesPlayedSuccess,
  gamesPlayedFailure
}
