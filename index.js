/* eslint-env node */
/* eslint requirejs/enforce-define: 0 */

'use strict';

const compile = require('google-closure-compiler-js').compile;

module.exports = src => {
  const result = compile({
    languageIn: 'ECMASCRIPT6',
    languageOut: 'ECMASCRIPT5',
    compilationLevel: 'SIMPLE',
    warningLevel: 'VERBOSE',
    jsCode: [{ src }]
  }).compiledCode;

  return result;
};
