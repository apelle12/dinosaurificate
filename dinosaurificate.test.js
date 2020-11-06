const { expect } = require('@jest/globals');
const funToTest = require('./dinosaurificate');


test('test1: John does not make Johnosaurus', () => {
  expect(funToTest("John")).toBe("Johnosaurus");
})

test('test2: "Sue does not make Sueosaurus', () => {
  expect(funToTest("Sue")).toBe("Sueosaurus");
})
