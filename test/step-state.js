var test = require('tape')
var Keys = require('ssb-keys')
var pluck = require('lodash.pluck')
var range = require('lodash.range')

var Board = require('../lib/board')
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
    board: new Board({ rows: rows, cols: cols })
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

  t.deepEqual(steppedState, {
    players: players,
    board: createBoard([{
      x: 10,
      y: 10,
      player: players[0]
    }])
  })

  function createBoard (stones) {
    var board = new Board({ rows: rows, cols: cols})
    stones.forEach(function (stone) {
      board.set([stone.x, stone.y], stone.player)
    })
    return board
  }

  t.end()
})
