var test = require('tape')
var repeat = require('repeat-array')

var Board = require('../lib/board')

test('board', function (t) {
  var rows = 19
  var cols = 19
  var board = new Board({
    rows: rows,
    cols: cols
  })

  t.deepEqual(board.data, repeat([null], rows * cols))
  t.deepEqual(board.shape, [rows, cols])
  t.deepEqual(board.stride, [rows, 1])

  t.end()
})
