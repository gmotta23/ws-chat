const crypto = require('crypto')

const cryptoService = {
  generateUUID: () => {
    return crypto.randomUUID()
  }
}

module.exports = cryptoService
