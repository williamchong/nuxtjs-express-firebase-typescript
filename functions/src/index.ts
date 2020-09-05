/* eslint-disable global-require */
const currentFunction = process.env.FUNCTION_NAME || process.env.K_SERVICE;

if (!currentFunction || currentFunction === 'ssrapp') {
  exports.ssrapp = require('./ssrapp');
}

if (!currentFunction || currentFunction === 'apiHttp') {
  exports.apiHttp = require('./apiHttp');
}
