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
  $('#message').text('Sign in successful!')
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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
