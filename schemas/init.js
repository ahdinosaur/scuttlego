module.exports = {
  id: 'Init',
  type: 'object',
  properties: {
    type: {
      type: 'enum',
      enum: ['scuttlego/Init']
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
    text: {
      type: 'string'
    }
  }
}
