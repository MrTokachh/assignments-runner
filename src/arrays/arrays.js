export function mapTo(array, mapParam) {
 switch (typeof mapParam) {
   case "string":
    return array.map(item => item[mapParam]);

    default:
    return array.map((x,  index) =>  index)

 }
}

export function mapToProfile(array) {
  // return array.map((el) => {
  //   let name = el.name;
  //   let surname = el.surname;
  //   let age = el.age;
  //   let fullname;

  //   if (typeof name === 'undefined') {
  //     name = null
  //     fullname = "_" + ' ' + surname
  //   } else if (typeof surname === 'undefined') {
  //     surname = null
  //     fullname = name + ' ' + '_'
  //   } else if (typeof age === 'undefined') {
  //     age = null
  //   }

  //   return {name: name, surname: surname, fullname: fullname, age:age}
    
  // })
}

export function filterBy(array, filterParams) {
  switch (typeof filterParams) {
    case "number":
      return array.filter(n => n >= filterParams);

    case "string":
      return array.filter(n => n[filterParams]);
    
    default:
      var objProp = filterParams.property;
      var objFunc = filterParams.filterCb;

      return array.filter(n => {
        var value = n[objProp];

        return value ? objFunc(value) : false;
      })
  }
}

export function reduceTo(array,reduceParams) { 
  switch (typeof reduceParams) {
    case "string" :
      return array.reduce((a, b) => a + b.total, 0);
    case  "object":
      let firstParam = reduceParams[0];
      let secondParam = reduceParams[1];
      let isArr = Array.isArray(reduceParams);
      let output = [array.reduce((a,b) => a + b[firstParam], 0), array.reduce((a,b) => a + b[secondParam], 0)];

      return isArr ? output : false;

    default:
      return array.reduce((a, b) => a + b, -10);
  }
}

export function sort(array, sortParams) {
  switch (typeof sortParams) {
    case "string":
      return array.sort((a,b) => a[sortParams] - b[sortParams])
    case "object":
      let firstParam = sortParams[0];
      let secondParam = sortParams[1];

      if (typeof secondParam === "string") {
        return array.sort((a, b) => a[firstParam] - b[firstParam] || a[secondParam] - b[secondParam]);

      } else {
        secondParam = secondParam.field
        return array.sort((a, b) => a[firstParam] - b[firstParam] || b[secondParam] - a[secondParam]);
      }
    default:
      return array.sort((a,b) =>  a - b)
  }
}

export function complex(array, params) {
  // return a.filter(n => n.age>4).map(item =>item.total)
  // return a.filter(n => n.total<10).reduce((a, b) => a + b.total, 0)
  // return a.filter(n => n.age>=4).map(item => item.total).sort((b, c) =>  c - b)

  let func = params[0].callback;

  switch (params[1].operation) {
    case "reduce" :

  }
  
}
