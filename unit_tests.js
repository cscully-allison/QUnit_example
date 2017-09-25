QUnit.test("Basic Test", function( assert ) {
  assert.equal(basicFunction(1), 2);
  assert.equal(basicFunction(2), "Three");
  assert.equal(basicFunction(3), 45);
  assert.deepEqual(object_1, object_2, "These two objects should not be equal.");
  assert.ok(basicFunction(14), "Any numerical response is true?");
});
