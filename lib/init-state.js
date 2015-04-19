var Ndarray = require('ndarray')

var validate = require('./validate')

module.exports = initState

function initState (initMsg) {
  var validationErrs = validate(initMsg)
  if (validationErrs) {
    console.error('validation errors', validationErrs)
  }

  var players = initMsg.players
  var rows = initMsg.rules.rows || 19
  var cols = initMsg.rules.cols || 19

  return {
    players: players,
    stones: new Ndarray([], [rows, cols])
  }
}
