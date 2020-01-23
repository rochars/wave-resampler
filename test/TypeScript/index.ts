/*
 * Copyright (c) 2019 Rafael da Silva Rocha.
 */

/**
 * @fileoverview TypeScript declaration tests.
 * @see https://github.com/rochars/wave-resampler
 */

import { resample } from '../../index.js'

let samples = resample([1], 1, 2);
