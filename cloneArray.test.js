const cloneArray = require("./cloneArray");

test("Cloning an array", () => {
  const array = [1, 2, 3];
  expect(cloneArray(array)).toBe(array);
});
test("equality matchers", () => {
  expect(2 * 2).toBe(4);
  expect(4 - 2).not.toBe(1);
});

test("Arithmetic Operations", () => {
  expect(2).toBeGreaterThan(1);
  expect(2).toBeGreaterThanOrEqual(2);
  expect(2).toBeLessThanOrEqual(2);
  expect(2).toBeLessThan(3);
});
test("string matchers", () => {
  var string1 = "software testing help - a great resource for testers";

  // test for success match
  expect(string1).toMatch(/software/);

  // test for failure match
  expect(string1).not.toMatch(/abc/);

  expect(string1).toMatch(/help/);
  expect(string1).not.toMatch(/Saikumar/);
});
