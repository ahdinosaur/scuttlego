module.exports = {
  id: 'Init',
  type: 'object',
  properties: {
    type: {
      type: 'enum',
      enum: ['Init']
    },
    rules: {
      type: 'object',
      properties: {
        rows: {
          type: 'number'
        },
        cols: {
          type: 'number'
        }
      }
    },
    players: {
      type: 'array',
      items: {
        $ref: 'Player'
      }
    },
    text: {
      type: 'string'
    }
  }
}
