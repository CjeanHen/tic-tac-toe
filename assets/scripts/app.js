'use strict'
const authEvents = require('./auth/events')
const playEvents = require('./play')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // AUTH listeners
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pw').on('submit', authEvents.onChangePw)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#new-game').on('click', authEvents.onNewGame)

  // Game listeners
  $('.cells').on('click', playEvents.onTakeTurn)
})
