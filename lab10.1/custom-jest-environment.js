/* eslint-disable strict */
'use strict';

const BrowserEnvironment = require('jest-environment-jsdom');

class MyEnvironment extends BrowserEnvironment {
  constructor(config) {
    super(
      {
        ...config,
        globals: {
          ...config.globals, Uint32Array, Uint8Array, ArrayBuffer,
        },
      },
    );
  }

  async setup() {}

  async teardown() {}
}

module.exports = MyEnvironment;
