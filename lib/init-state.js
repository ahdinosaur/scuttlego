var Ndarray = require('ndarray')

module.exports = initState

function initState (initMsg) {
  var rows = initMsg.rules.rows || 19
  var cols = initMsg.rules.cols || 19

  return {
    players: initMsg.players,
    stones: new Ndarray([], [rows, cols])
  }
}
