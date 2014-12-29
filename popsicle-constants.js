var hasOwnProperty = Object.prototype.hasOwnProperty;

function popsicleConstants (constants) {
  constants = constants || {};

  function replacer (match, name) {
    if (!hasOwnProperty.call(constants, name)) {
      return match;
    }

    return encodeURIComponent(constants[name]);
  }

  return function (request) {
    request.url = request.url.replace(/\{([^\}]+)\}/g, replacer);
  };
}

module.exports = popsicleConstants;
