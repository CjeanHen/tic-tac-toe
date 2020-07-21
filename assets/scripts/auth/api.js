const config = require('../config')
const store = require('../store')

const signUp = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const changePw = formData => {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: formData
  })
}

const signOut = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/sign-out',
    method: 'DELETE'
  })
}

const newGame = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {},
    url: config.apiUrl + '/games',
    method: 'POST'
  })
}

const takeTurn = function (game) {
  game = {
    game: {
      cell: game.cell,
      over: game.over
    }
  }
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games/' + store.game._id,
    data: game,
    method: 'PATCH'
  })
}

const gamesPlayed = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games',
    method: 'GET'
  })
}

module.exports = {
  signUp,
  signIn,
  changePw,
  signOut,
  newGame,
  takeTurn,
  gamesPlayed
}
