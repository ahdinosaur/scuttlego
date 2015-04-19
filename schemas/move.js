module.exports = {
  id: 'Move',
  type: 'object',
  properties: {
    type: {
      type: 'enum',
      enum: ['Move']
    },
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
