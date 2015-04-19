var test = require('tape')
var Keys = require('ssb-keys')
var range = require('lodash.range')
var assign = require('lodash.assign')
var pick = require('lodash.pick')
var Ndarray = require('ndarray')

var initState = require('../lib/init-state')

var playerNames = ['Alice', 'Bob']

test('init state', function (t) {
  var rows = 19
  var cols = 19
  var players = range(2).map(function (index) {
    return assign(
      Keys.generate(),
      { name: playerNames[index] }
    )
  })

  var initPlayers = pick(players, ['id', 'name'])
  var initMsg = {
    type: 'Init',
    players: initPlayers,
    rules: {
      rows: rows,
      cols: cols
    }
  }

  var state = initState(initMsg)
  t.deepEqual(state, {
    players: initPlayers,
    stones: new Ndarray([], [rows, cols])
  })

  t.end()
})
