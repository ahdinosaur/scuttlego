module.exports = {
  id: 'Move',
  type: 'object',
  properties: {
    type: {
      type: 'enum',
      enum: ['scuttlego/Move']
    },
    game: {
      properties: {
        root: {
          type: 'string',
          format: 'hash'
        },
        branch: {
          type: 'string',
          format: 'hash'
        }
      }
    },
    move: {
      properties: {

      }
    }
  }
}
