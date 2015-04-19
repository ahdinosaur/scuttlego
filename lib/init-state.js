var Ndarray = require('ndarray')

module.exports = initState

function initState (initMsg) {
  return {
    players: initMsg.players,
    stones: new Ndarray([], [
      initMsg.rules.rows,
      initMsg.rules.cols
    ])
  }
}
