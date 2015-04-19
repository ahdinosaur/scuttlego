var Validator = require('z-schema')
var Keys = require('ssb-keys')
var objectValues = require('lodash.values')

var schemas = require('../schemas')

Validator.registerFormat('hash', function (str) {
  return Keys.isHash(str)
})

var validator = new Validator({
//  strictMode: true,
  breakOnFirstError: false,
  reportPathAsArray: true
})

var validSchemas = validator.validateSchema(
  objectValues(schemas)
)
if (!validSchemas) {
  console.error('schemas are invalid', validator.getLastErrors())
}

module.exports = function (message) {
  var type = message.type
  var schema = schemas[type]

  var valid = validator.validate(message, schema)

  if (valid) {
    return null
  } else {
    return validator.getLastErrors()
  }
}
