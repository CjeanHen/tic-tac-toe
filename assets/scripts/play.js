let turn = 1
let cells = ['','','','','','','','','','']

const onTakeTurn = event => {
  if (turn % 2 === 1) {
    $(event.target).html('<h1>X</h1>')
    turn++
  } else {
    $(event.target).html('<h1>O</h1>')
    turn++
  }
}

module.exports = {
  onTakeTurn
}
