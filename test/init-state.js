var test = require('tape')
var Keys = require('ssb-keys')
var range = require('lodash.range')
var pluck = require('lodash.pluck')

var Board = require('../lib/board')
var initState = require('../lib/init-state')

test('init state', function (t) {
  var rows = 19
  var cols = 19
  var keys = range(2).map(function (index) {
    return Keys.generate()
  })
  var players = pluck(keys, 'id')

  var initMsg = {
    content: {
      type: 'Init',
      players: players,
      rules: {
        rows: rows,
        cols: cols
      }
    }
  }

  var state = initState(initMsg)

  t.deepEqual(state, {
    players: players,
    board: new Board({ rows: rows, cols: cols })
  })

  t.end()
})
