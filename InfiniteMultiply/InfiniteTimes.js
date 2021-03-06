module.exports = function() {
  if (arguments.length < 1) {
    return " parameter should not be empty";
  }
  var multiply = 1;
  for (var i = 0; i < arguments.length; i++) {
    if (isArray(arguments[i])) {
      multiply *= multiplyArrayValues(arguments[i]);
    } else if (typeof arguments[i] === "object" && arguments[i] !== null) {
      multiply *= MultiplyObjectValues(arguments[i]);
    } else if (arguments[i] !== null) {
      multiply *= arguments[i];
    }
  }
  return multiply;
};
function isArray(value) {
  return value instanceof Array;
}
function multiplyArrayValues(arr) {
  var multiply = 1;
  for (var i = 0; i < arr.length; i++) {
    if (isArray(arr[i])) {
      multiply *= multiplyArrayValues(arr[i]);
    } else if (typeof arr[i] === "object" && arr[i] !== null) {
      multiply *= MultiplyObjectValues(arr[i]);
    } else if (arr[i] !== null) {
      multiply *= arr[i];
    }
  }
  return multiply;
}
function MultiplyObjectValues(obj) {
  var multiply = 1;
  for (var index in obj) {
    if (isArray(obj[index])) {
      multiply *= multiplyArrayValues(obj[index]);
    } else if (typeof obj[index] === "object" && obj[index] !== null) {
      multiply *= MultiplyObjectValues(obj[index]);
    } else if (obj[index] !== null) {
      multiply *= obj[index];
    }
  }

  return multiply;
}
