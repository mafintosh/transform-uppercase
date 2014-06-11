var through = require('through2')

var uppercase = function(data) {
  if (Buffer.isBuffer(data)) data = data.toString()
  if (typeof data === 'string') return data.toUpperCase()

  if (data && typeof data === 'object') {
    var copy = {}
    Object.keys(data).forEach(function(key) {
      copy[key] = uppercase(data[key])
    })
    return copy
  }

  if (Array.isArray(data)) return data.map(uppercase)

  return data
}

module.exports = function() {
  return through.obj(function(data, enc, cb) {
    cb(null, uppercase(data))
  })
}