export function add(a, b) {  
  // TODO: Don't over complicate if statement
  // Make for each semantically solid block separate variable
  // Ex: isInfinityParams = a == Number.NEGATIVE_INFINITY || b == Number.POSITIVE_INFINITY
  // TODO: Create and reuse general functionality
  // Ex. checkIsEmptySting, checkIsNull, checkIsObject functions 
  // TODO: Always prefer strict instead of default equality
  // TODO: Investigate usage Number.isNaN instead of isNaN
  // TODO: Rename a, b to move appropriate variable names according to function logic
  // Ex: firstOperand, secondOperand, etc. 
  // TODO: Remove excessive check isNaN(a) == true, since isNaN already return boolean value 
  if (a == Number.NEGATIVE_INFINITY || b == Number.POSITIVE_INFINITY || a == '' || typeof b == "object" || isNaN(a) == true || a == null || b == null) {
    return null
  } else {
    return a + b
  }

  // TODO: Remove unused code
  throw 'Not implemented';
}

export function subtract(a, b) {

  // TODO: Check usage typeof a == "undefined",maybe we could remove this check at all
  if (typeof a == "object"  || b == '' || b == null || typeof a == "undefined") {
    return null
  } else {
    return a - b
  }
  throw 'Not implemented';
}

export function complex(a, b) {
  let base = a[0] * a[1];
  let exp = b[0] / b[1];
  // Move out of complex scope and reuse at other functions
  let isNull = (element) => element  === null;

  if (exp == Infinity || isNaN(exp) == true || b.some(isNull)) {
    return null
  } else {
    return Math.pow(base, exp)
  }

  
  throw 'Not implemented';
}
