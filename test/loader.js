/**
 * Copyright (c) 2019 Rafael da Silva Rocha.
 * https://github.com/rochars/wave-resampler
 *
 */

/**
 * @fileoverview wave-resampler loader for the tests.
 *
 * Load resample() from the source or from the dist files.
 */

/** @type {Object} */
let resample;

// UMD
if (process.argv[3] == '--umd') {
  console.log('umd tests');
  resample = require('../dist/wave-resampler.js').resample;

// Source
} else {
  console.log('Source tests');
  require = require("esm")(module);
  global.module = module;
  resample = require('../index.js').resample;
}

module.exports = resample;
