# wave-resampler
Copyright (c) 2019 Rafael da Silva Rocha.  
https://github.com/rochars/wave-resampler

[![NPM version](https://img.shields.io/npm/v/wave-resampler.svg?style=for-the-badge)](https://www.npmjs.com/package/wave-resampler) [![Docs](https://img.shields.io/badge/API-docs-blue.svg?style=for-the-badge)](https://rochars.github.io/wave-resampler/docs) [![Tests](https://img.shields.io/badge/tests-online-blue.svg?style=for-the-badge)](https://rochars.github.io/wave-resampler/test/index.html)  
[![Codecov](https://img.shields.io/codecov/c/github/rochars/wave-resampler.svg?style=flat-square)](https://codecov.io/gh/rochars/wave-resampler) [![Unix Build](https://img.shields.io/travis/rochars/wave-resampler.svg?style=flat-square)](https://travis-ci.org/rochars/wave-resampler) [![Windows Build](https://img.shields.io/appveyor/ci/rochars/wave-resampler.svg?style=flat-square&logo=appveyor)](https://ci.appveyor.com/project/rochars/wave-resampler) [![Scrutinizer](https://img.shields.io/scrutinizer/g/rochars/wave-resampler.svg?style=flat-square&logo=scrutinizer)](https://scrutinizer-ci.com/g/rochars/wave-resampler/)

PCM audio resampler written entirely in JavaScript.

## Install
```
npm install wave-resampler
```

## Use

### Node
```javascript
const waveResampler = require('wave-resampler');
// resample 48kHz samples to 44.1kHz
let newSamples = waveResampler.resample(samples, 48000, 44100);
```
or
```javascript
import { resampler } from 'wave-resampler';
let newSamples = resample(samples, 48000, 44100);
```

### Browser
Use the **wave-resampler.js** file in the *dist* folder:
```html
<script src="wave-resampler.js"></script>
<script>
  var newSamples = waveResampler.resample(samples, 48000, 44100);
</script>
```

Or load it from the [jsDelivr](https://cdn.jsdelivr.net/npm/wave-resampler) CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/wave-resampler"></script>
```

Or load it from [unpkg](https://unpkg.com/wave-resampler):
```html
<script src="https://unpkg.com/wave-resampler"></script>
```

## Advanced use

### Resampling methods
- **point**: Nearest point interpolation, lowest quality, no LPF by default, fastest
- **linear**: Linear interpolation, low quality, no LPF by default, fast
- **cubic**: Cubic interpolation, use LPF by default **(default method)**
- **sinc**: Windowed sinc interpolation, use LPF by default, slowest

To use a different interpolation method:
```javascript
// Will use 'sinc' method
resample(48000, 44100, {method: "sinc"});

// Will use 'linear' method
resample(48000, 44100, {method: "linear"});
```

### LPF
You can turn the LPF on and off for any resampling method:
```javascript
// Will use 'sinc' method with no LPF
let newSamples = resample(48000, 44100, {method: "sinc", LPF: false});

// Will use 'linear' method with LPF
let newSamples = resample(48000, 44100, {method: "linear", LPF: true});
```

The default LPF is a IIR LPF. You may define what type of LPF will be used
by changing the LPFType attribute on the *toSampleRate()* param.
You can use **IIR** or **FIR**:
```javascript
// Will use 'linear' method with a FIR LPF
let newSamples = resample(48000, 44100,
  {method: "linear", LPF: true, LPFType: 'FIR'});

// Will use 'linear' method with a IIR LPF, the default
let newSamples = resample(48000, 44100,
  {method: "linear", LPF: true});
```

You can change the order of the LPF for both IIR and FIR with
the attribute LPFOrder:
```javascript
let newSamples = resample(48000, 44100,
  {method: "linear", LPF: true, LPFType: 'IIR', LPFOrder: 2});
```

The default order for IIR is 16 and for FIR is 71.

## API
```javascript
/**
 * Change the sample rate of the samples to a new sample rate.
 * @param {!Array|!TypedArray} samples The original samples.
 * @param {number} oldSampleRate The original sample rate.
 * @param {number} sampleRate The target sample rate.
 * @param {?Object} details The extra configuration, if needed.
 * @return {!Float64Array} the new samples.
 */
export function resample(samples, oldSampleRate, sampleRate, details={}) {}
```

### LICENSE
Copyright (c) 2019 Rafael da Silva Rocha.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
