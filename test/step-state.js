var test = require('tape')
var Keys = require('ssb-keys')
var pluck = require('lodash.pluck')
var range = require('lodash.range')
var Ndarray = require('ndarray')

var stepState = require('../lib/step-state')

test('step state', function (t) {
  var rows = 19
  var cols = 19
  var keys = range(2).map(function (index) {
    return Keys.generate()
  })
  var players = pluck(keys, 'id')

  var initState = {
    players: players,
    board: new Ndarray([], [rows, cols])
  }

  // first move
  var move = {
    type: 'Move',
    move: {
      x: 10,
      y: 10
    }
  }
  var stepMsg = {
    author: players[0],
    content: move
  }

  var steppedState = stepState(initState, stepMsg)

  var steppedBoard = new Ndarray([], [rows, cols])
  steppedBoard.set([10, 10], players[0])

  t.deepEqual(steppedState, {
    players: players,
    board: steppedBoard
  })

  t.end()
})
