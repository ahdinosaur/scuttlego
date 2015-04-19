var test = require('tape')
var Keys = require('ssb-keys')
var range = require('lodash.range')
var assign = require('lodash.assign')
var pick = require('lodash.pick')

var initState = require('../lib/init-state')

var playerNames = ['Alice', 'Bob']

test('init state', function (t) {
  var players = range(2).map(function (index) {
    return assign(
      Keys.generate(),
      { name: playerNames[index] }
    )
  })

  var initPlayers = pick(players, ['id', 'name'])
  var initMsg = {
    type: 'Init',
    players: initPlayers
  }

  var state = initState(initMsg)
  t.deepEqual(state, {
    players: initPlayers,
    stones: new Map()
  })

  t.end()
})
