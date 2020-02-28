const { Interpreter } = require('./dist/jsi.bundle');
const assert = require('assert').strict;

const myCode = `
var i = 0;
var result = [];
for (i = 0; i < 10; ++i) {
    result.push(i*i);
}
test(result.join(', '));
`;

const initFunc = (i, s) => {
  i.setProperty(s, 'test', i.createNativeFunction((text) => assert.strictEqual(text, '0, 1, 4, 9, 16, 25, 36, 49, 64, 81')));
};
const myInterpreter = new Interpreter(myCode, initFunc);
myInterpreter.run();
