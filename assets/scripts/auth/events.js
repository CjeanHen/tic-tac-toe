const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePw = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.changePw(formData)
    .then(ui.changePwSuccess)
    .catch(ui.changePwFailure)
}

const onSignOut = event => {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onNewGame = event => {

  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onGamesPlayed = event => {
  api.gamesPlayed()
    .then(ui.gamesPlayedSuccess)
    .catch(ui.gamesPlayedFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePw,
  onSignOut,
  onNewGame,
  onGamesPlayed
}
