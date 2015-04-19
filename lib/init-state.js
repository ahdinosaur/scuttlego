var Ndarray = require('ndarray')

var validate = require('./validate')

module.exports = initState

function initState (initMsg) {
  var content = initMsg.content
  var validationErrs = validate(content)
  if (validationErrs) {
    console.error('validation errors', validationErrs)
  }

  var players = content.players
  var rows = content.rules.rows || 19
  var cols = content.rules.cols || 19

  return {
    players: players,
    board: new Ndarray([], [rows, cols])
  }
}
