const SUPER_MAP = {
  '0': '⁰',
  '1': '¹',
  '2': '²',
  '3': '³',
  '4': '⁴',
  '5': '⁵',
  '6': '⁶',
  '7': '⁷',
  '8': '⁸',
  '9': '⁹',
}

function randomInt(minVal, maxVal)
{
    return Math.round(Math.random() * (maxVal - minVal) + minVal);
}

function randomBool()
{
  return Math.random() < 0.5;
}

function toMappedCharacter(value, map) {
  if (value == 1) {
    return ""
  }

  var returnedString = ""
  if (value < 0) {
    returnedString += "⁻"
    value *= -1
  }

  return returnedString + value.toString().replace(/[0123456789]/g, function(match) {
      return map[match]
  })
}

function getExponentString(value) {
  return toMappedCharacter(value, SUPER_MAP)
}

function getSimplifiedTerm(exponent, ignoreZero = false) {
  if (!ignoreZero && exponent == 0) {
    return "1"
  }
  else {
    return "x" + getExponentString(exponent)
  }
}

function createConcept() {
  var firstRoot = randomInt(1, 9)
  // if (randomBool()) {
  //   firstRoot *= -1
  // }

  var secondRoot = randomInt(1, 9)
  // if (randomBool()) {
  //   secondRoot *= -1
  // }

  var sum = firstRoot + secondRoot
  var product = firstRoot * secondRoot

  return {
    sum: sum,
    product: product,
    firstRoot: firstRoot,
    secondRoot: secondRoot
  }
}
