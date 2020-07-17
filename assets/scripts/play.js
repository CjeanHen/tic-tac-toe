let turn = 1
const cells = ['', '', '', '', '', '', '', '', '']
let over = false

const onTakeTurn = event => {
  const cellPlayed = event.target
  const cellIndex = parseInt(cellPlayed.getAttribute('data-cell'))

  if (cellPlayed.getAttribute('data-isOpen') === 'yes') {
    if (turn % 2 === 1) {
      $(cellPlayed).html('<h1>X</h1>')
      cells[cellIndex] = 'x'
      cellPlayed.setAttribute('data-isOpen', 'no')
      console.log(cellPlayed)
      turn++
    } else {
      $(cellPlayed).html('<h1>O</h1>')
      cells[cellIndex] = 'o'
      cellPlayed.setAttribute('data-isOpen', 'no')
      console.log(cellPlayed)
      turn++
    }
  }
}

// WAYS TO WIN:
// cells[0] === cells[1] && cells[1] === cells[2]
// cells[3] === cells[4] && cells[4] === cells[5]
// cells[6] === cells[7] && cells[7] === cells[8]
// cells[0] === cells[3] && cells[3] === cells[6]
// cells[1] === cells[4] && cells[4] === cells[7]
// cells[2] === cells[5] && cells[5] === cells[8]
// cells[0] === cells[4] && cells[4] === cells[8]
// cells[2] === cells[4] && cells[4] === cells[3]

module.exports = {
  onTakeTurn
}
