const api = require('./auth/api.js')
const ui = require('./auth/ui')
const store = require('./store')

// const cells = ['', '', '', '', '', '', '', '', '']
const onTakeTurn = event => {
  const turn = store.game.__v
  const turnData = {
    cell: {},
    over: false
  }
  const cells = store.game.cells

  const cellPlayed = event.target
  const cellIndex = parseInt(cellPlayed.getAttribute('data-cell'))

  if (cellPlayed.getAttribute('data-isOpen') === 'yes' && store.game.over === false) {
    if (turn % 2 === 0) {
      $(cellPlayed).html('<h1>X</h1>')
      cells[cellIndex] = 'x'
      cellPlayed.setAttribute('data-isOpen', 'no')
      if (isOver(cells)) {
        turnData.over = true
      }
      turnData.cell.index = cellIndex
      turnData.cell.value = 'x'
    } else {
      $(cellPlayed).html('<h1>O</h1>')
      cells[cellIndex] = 'o'
      cellPlayed.setAttribute('data-isOpen', 'no')
      if (isOver(cells)) {
        turnData.over = true
      }
      turnData.cell.index = cellIndex
      turnData.cell.value = 'o'
    }
    console.log(cells)
  }

  api.takeTurn(turnData)
    .then(ui.takeTurnSuccess)
    .catch(ui.takeTurnFailure)
}

const isOver = cells => {
  if ((cells[0] === cells[1] && cells[1] === cells[2]) && (cells[0] === 'x' || cells[0] === 'o')) {
    for (let i = 0; i < cells.length; i++) {
      cells[i] = ''
    }
    return true
  } else if ((cells[3] === cells[4] && cells[4] === cells[5]) && (cells[3] === 'x' || cells[3] === 'o')) {
    for (let i = 0; i < cells.length; i++) {
      cells[i] = ''
    }
    return true
  } else if ((cells[6] === cells[7] && cells[7] === cells[8]) && (cells[6] === 'x' || cells[6] === 'o')) {
    for (let i = 0; i < cells.length; i++) {
      cells[i] = ''
    }
    return true
  } else if ((cells[0] === cells[3] && cells[3] === cells[6]) && (cells[0] === 'x' || cells[0] === 'o')) {
    for (let i = 0; i < cells.length; i++) {
      cells[i] = ''
    }
    return true
  } else if ((cells[1] === cells[4] && cells[4] === cells[7]) && (cells[1] === 'x' || cells[1] === 'o')) {
    for (let i = 0; i < cells.length; i++) {
      cells[i] = ''
    }
    return true
  } else if ((cells[2] === cells[5] && cells[5] === cells[8]) && (cells[2] === 'x' || cells[2] === 'o')) {
    for (let i = 0; i < cells.length; i++) {
      cells[i] = ''
    }
    return true
  } else if ((cells[0] === cells[4] && cells[4] === cells[8]) && (cells[0] === 'x' || cells[0] === 'o')) {
    for (let i = 0; i < cells.length; i++) {
      cells[i] = ''
    }
    return true
  } else if ((cells[2] === cells[4] && cells[4] === cells[6]) && (cells[2] === 'x' || cells[2] === 'o')) {
    for (let i = 0; i < cells.length; i++) {
      cells[i] = ''
    }
    return true
  }
  console.log('IS OVER', cells)
}

module.exports = {
  onTakeTurn
}
