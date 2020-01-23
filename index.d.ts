// Type definitions for wave-resampler 1.0
// Project: https://github.com/rochars/wave-resampler
// Definitions by: Rafael da Silva Rocha <https://github.com/rochars>
// Definitions: https://github.com/rochars/wave-resampler

/**
 * Change the sample rate of the samples to a new sample rate.
 * @param {!Array|!TypedArray} samples The original samples.
 * @param {number} oldSampleRate The original sample rate.
 * @param {number} sampleRate The target sample rate.
 * @param {?Object} details The extra configuration, if needed.
 * @return {!Float64Array} the new samples.
 */
export function resample(
  samples: ArrayLike<number>,
  oldSampleRate: number,
  sampleRate: number,
  details?: object): ArrayLike<number>;
