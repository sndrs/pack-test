'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const test = 'test';

let a = {
  b: 'b'
};
const x = (a === null || a === void 0 ? void 0 : a.b) ? 'b' : test;
const cli = () => console.log(x);

exports.cli = cli;
exports.x = x;
//# sourceMappingURL=index.js.map
