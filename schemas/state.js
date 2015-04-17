module.exports = {
  id: 'Move',
  type: 'object',
  properties: {
    type: {
      type: 'enum',
      enum: ['scuttlego/Move']
    },
    players: {
      type: 'array',
      items: {
        $ref: 'Player
      }
    },
    stones: {
      type: 'object',
      properties: {
        player: {
          type: 'string'
        },
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
