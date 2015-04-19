var validate = require('./validate')
var Board = require('./board')

module.exports = initState

function initState (initMsg) {
  var content = initMsg.content
  var validationErrs = validate(content)
  if (validationErrs) {
    console.error('validation errors', validationErrs)
  }

  return {
    players: content.players,
    board: new Board(content.rules)
  }
}
