// Your code here
function mapToNegativize(sourceArray) {
  let newArray = [];
  sourceArray.forEach(number => newArray.push(number * -1));
  return newArray;
}

function mapToNoChange(sourceArray) {
  let newArray = [];
  sourceArray.forEach(number => newArray.push(number));
  return newArray;
}

function mapToDouble(sourceArray) {
  let newArray = [];
  sourceArray.forEach(number => newArray.push(number * 2));
  return newArray;
}

function mapToSquare(sourceArray) {
  let newArray = [];
  sourceArray.forEach(number => newArray.push(number ** 2));
  return newArray;
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let base = startingPoint;
  sourceArray.forEach(number => base = base + number);
  return base;
}

function reduceToAllTrue(sourceArray) {
  let newArray = [];
  for (const element of sourceArray) {
    if (element) {
      newArray.push(element);
    }
  }
  if (newArray.length == sourceArray.length) {
    return true;
  }
  else {
    return false;
  }
}

function reduceToAnyTrue(sourceArray) {
  let newArray = [];
  for (const element of sourceArray) {
    if (element) {
      newArray.push(element);
    }
  }
  if (newArray.length > 0) {
    return true;
  }
  else {
    return false;
  }
}
