module.exports = {
  id: 'Player',
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    id: {
      type: 'string',
      format: 'hash'
    }
  }
}
