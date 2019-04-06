const add = require("./Add");

test("adds 2 + 4 to equals 6", () => {
  expect(add(2, 4)).toBe(6);
});

test("Empty arguments ", () => {
  expect(add()).toEqual("No parameter should be empty");
});

test("One Empty argument ", () => {
  expect(add(2)).toBe("No parameter should be empty");
});
test("One argument not number", () => {
  expect(add([], 2)).toBe("All Parameters should be number");
});
test("All arguments not number", () => {
  expect(add({}, [])).toBe("All Parameters should be number");
});
test("All arguments not number", () => {
  expect(add("9g", "6t")).toBe("All Parameters should be number");
});
test("All arguments not number", () => {
  expect(add(function() {}, [])).toBe("All Parameters should be number");
});
