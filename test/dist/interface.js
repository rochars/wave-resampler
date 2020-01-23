/**
 * Copyright (c) 2019 Rafael da Silva Rocha.
 * https://github.com/rochars/wave-resampler
 *
 * Check if all API is available.
 *
 */

var assert = assert || require('assert');
var resample = resample || require('../loader.js');

// Upsample, downsample
describe('API Methods', function() {

  it('resample() upsample should return a Float64Array', function() {
    let samples = resample([1,2], 2, 4);
    assert.equal(samples.constructor, Float64Array);
  });

  it('resample() downsample should return a Float64Array', function() {
    let samples = resample([1,2], 2, 1);
    assert.equal(samples.constructor, Float64Array);
  });
});

// With default LPF (IIR), no LPF and FIR LPF
describe('LPFs', function() {

  it('resample() with no LPF', function() {
    let samples = resample([1,2], 2, 4, {LPF: false});
    assert.equal(samples.constructor, Float64Array);
  });

  it('resample() with FIR', function() {
    let samples = resample([1,2,3,4], 2, 4, {LPFType: 'FIR'});
    assert.equal(samples.constructor, Float64Array);
  });

  it('resample() with FIR, changing default LPForder', function() {
    let samples = resample([1,2,3,4], 2, 4, {LPFType: 'FIR', LPFOrder: 2});
    assert.equal(samples.constructor, Float64Array);
  });
});

// All resampling methods
describe('Resampling methods', function() {

  it('point', function() {
    let samples = resample([1,2], 2, 4, {method: 'point'});
    assert.equal(samples.constructor, Float64Array);
  });

  it('linear', function() {
    let samples = resample([1,2], 2, 4, {method: 'linear'});
    assert.equal(samples.constructor, Float64Array);
  });

  it('cubic', function() {
    let samples = resample([1,2], 2, 4, {method: 'cubic'});
    assert.equal(samples.constructor, Float64Array);
  });

  it('sinc', function() {
    let samples = resample([1,2], 2, 4, {method: 'sinc'});
    assert.equal(samples.constructor, Float64Array);
  });
});
