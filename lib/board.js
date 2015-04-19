var Ndarray = require('ndarray')
var repeat = require('repeat-array')

module.exports = Board

function Board (rules) {
  var rows = rules.rows || 19
  var cols = rules.cols || 19

  var empties = repeat([null], rows * cols)
  var self = new Ndarray(empties, [rows, cols ])

  return Board._augment(self)
}

function play (move, player) {
  // add move
  var path = [move.x, move.y]
  this.set(path, player)
}

Board._augment = function _augment (board) {
  board.constructor = Board

  board.play = play

  return board
}
