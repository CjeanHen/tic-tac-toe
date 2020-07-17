const store = require('../store')

const signUpSuccess = response => {
  $('#message').text('Sign up successful!')
  $('form').trigger('reset')
}

const signUpFailure = error => {
  console.log(error)
  $('#message').text('Sign up failed!')
  $('form').trigger('reset')
}

const signInSuccess = response => {
  $('form').trigger('reset')
  store.user = response.user
  $('#authorized').show()
  $('#unauthorized').hide()
}

const signInFailure = error => {
  console.log(error)
  $('#message').text('Sign in failed!')
  $('form').trigger('reset')
}

const signOutSuccess = response => {
  $('#message').text('Signed out!')
  $('form').trigger('reset')
  $('#unauthorized').show()
  $('#authorized').hide()
}

const signOutFailure = error => {
  console.log(error)
  $('#message').text('Could not sign out!')
  $('form').trigger('reset')
}

const changePwSuccess = response => {
  $('#message').text('Password changed!')
  $('form').trigger('reset')
}

const changePwFailure = error => {
  console.log(error)
  $('#message').text('Password could not be changed!')
  $('form').trigger('reset')
}

const newGameSuccess = response => {
  $('#gameBoard').css('visibility', 'visible')
  $('#auth-choices').hide()
  store.game = response.game
}

const newGameFailure = error => {
  $('#message').text(error)
}

const takeTurnSuccess = response => {
  $('#message').text('Next player!')
}

const takeTurnFailure = error => {
  console.log(error)
  $('#message').text('Turn not registered!')
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
  takeTurnFailure
}
