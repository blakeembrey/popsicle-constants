var _hasOwnProperty = Object.prototype.hasOwnProperty

module.exports = popsicleConstants

function popsicleConstants (constants) {
  constants = constants || {}

  function replacer (match, name) {
    if (!_hasOwnProperty.call(constants, name)) {
      return match
    }

    return encodeURIComponent(constants[name])
  }

  return function (request) {
    request.url = request.url.replace(/\{([^\}]+)\}/g, replacer)
  }
}
