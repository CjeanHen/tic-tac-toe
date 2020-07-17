const api = require('./auth/api.js')
const ui = require('./auth/ui')

let turn = 1
const cells = ['', '', '', '', '', '', '', '', '']
const turnData = {
  cell: {}
}

const onTakeTurn = event => {
  const cellPlayed = event.target
  const cellIndex = parseInt(cellPlayed.getAttribute('data-cell'))

  if (!over && cellPlayed.getAttribute('data-isOpen') === 'yes') {
    if (turn % 2 === 1) {
      $(cellPlayed).html('<h1>X</h1>')
      cells[cellIndex] = 'x'
      cellPlayed.setAttribute('data-isOpen', 'no')
      isOver(cells)
      turn++
      turnData.cell.index = cellIndex
      turnData.cell.value = 'x'
      turnData.over = over
    } else {
      $(cellPlayed).html('<h1>O</h1>')
      cells[cellIndex] = 'o'
      cellPlayed.setAttribute('data-isOpen', 'no')
      isOver(cells)
      turn++
      turnData.cell.index = cellIndex
      turnData.cell.value = 'o'
      turnData.over = over
    }
  }

  api.takeTurn(turnData)
    .then(ui.takeTurnSuccess)
    .catch(ui.takeTurnFailure)
}

const isOver = cells => {
  if ((cells[0] === cells[1] && cells[1] === cells[2]) && (cells[0] === 'x' || cells[0] === 'o')) {
    over = true
  } else if ((cells[3] === cells[4] && cells[4] === cells[5]) && (cells[3] === 'x' || cells[3] === 'o')) {
    over = true
  } else if ((cells[6] === cells[7] && cells[7] === cells[8]) && (cells[6] === 'x' || cells[6] === 'o')) {
    over = true
  } else if ((cells[0] === cells[3] && cells[3] === cells[6]) && (cells[0] === 'x' || cells[0] === 'o')) {
    over = true
  } else if ((cells[1] === cells[4] && cells[4] === cells[7]) && (cells[1] === 'x' || cells[1] === 'o')) {
    over = true
  } else if ((cells[2] === cells[5] && cells[5] === cells[8]) && (cells[2] === 'x' || cells[2] === 'o')) {
    over = true
  } else if ((cells[0] === cells[4] && cells[4] === cells[8]) && (cells[0] === 'x' || cells[0] === 'o')) {
    over = true
  } else if ((cells[2] === cells[4] && cells[4] === cells[6]) && (cells[2] === 'x' || cells[2] === 'o')) {
    over = true
  }
}

module.exports = {
  onTakeTurn
}
