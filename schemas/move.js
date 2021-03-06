module.exports = {
  id: 'Move',
  type: 'object',
  properties: {
    game: {
      properties: {
        root: {
          type: 'string',
          format: 'hash'
        },
        prev: {
          type: 'string',
          format: 'hash'
        }
      }
    },
    move: {
      properties: {
        x: {
          type: 'number'
        },
        y: {
          type: 'number'
        }
      }
    }
  }
}
