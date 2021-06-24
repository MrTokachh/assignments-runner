export function add(a, b) {  
  if (a == Number.NEGATIVE_INFINITY || b == Number.POSITIVE_INFINITY || a == '' || typeof b == "object" || isNaN(a) == true || a == null || b == null) {
    return null
  } else {
    return a + b
  }

  throw 'Not implemented';
}

export function subtract(a, b) {
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
  let isNull = (element) => element  === null;

  if (exp == Infinity || isNaN(exp) == true || b.some(isNull)) {
    return null
  } else {
    return Math.pow(base, exp)
  }

  
  throw 'Not implemented';
}
