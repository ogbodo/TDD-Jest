module.exports = function(a, b) {
  if (!a && !b) {
    return "No parameter should be empty";
  }
  if (!a || !b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return "All Parameters should be number";
    }
  }
  if (typeof a !== "number" || typeof b !== "number") {
    return "All Parameters should be number";
  }
  return a - b;
};
