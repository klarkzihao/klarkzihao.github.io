var klarkzihao = function () {
  function chunk(ary, size = 1) {
    var result = []
    for (let i = 0; i < ary.length; i += size)
      result.push(ary.slice(i, i + size))
    return result
  }


  function compact(ary) {
    var result = []
    for (let i = 0; i < ary.length; i++)
      if (ary[i])
        result.push(ary[i])
    return result
  }

  function difference(ary, values = []) {
    var temp = {}
    var result = []
    for (let i = 1; i < arguments.length; i++) {
      arguments[i].forEach(n => {
        if (!(n in temp))
          temp[n] = n
      })
    }
    ary.forEach(n => {
      if (!(n in temp))
        result.push(n)
    })
    return result
  }

  function differenceBy(ary, values = [], iteratee) {
    var temp = {}
    var result = []
    if (typeof (iteratee) == 'function') {
      values.forEach(n => {
        if (!(n in temp))
          temp[iteratee(n)] = n
      })
      ary.forEach(n => {
        if (!(iteratee(n) in temp))
          result.push(n)
      })
    } else if (typeof (iteratee) == 'string') {
      for (let i = 0; i < values.length; i++) {
      }
    }
    return result
  }

  function drop(ary, n = 1) {
    return ary.slice(n)
  }

  function dropRight(ary, n = 1) {
    return ary.length > n ? ary.slice(0, ary.length - n) : []
  }

  function fill(ary, value, start = 0, end = ary.length) {
    for (let i = start; i < end; i++)
      ary[i] = value
    return ary
  }

  function findIndex(array, predicate = identity, fromIndex = 0) {
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i]))
        return i
    }
    return -1
  }

  function flatten(ary) {
    let result = []
    ary.forEach(num => {
      if (typeof (num) == "object")
        result = result.concat(num)
      else
        result.push(num)
    })
    return result
  }

  function flattenDeep(ary, result = []) {
    ary.forEach(num => {
      if (typeof (num) == "number")
        result.push(num)
      else
        this.flattenDeep(num, result)
    })
    return result
  }

  function flattenDepth(ary, depth = 1, result = []) {

    return result
  }

  function fromPairs(ary) {
    var obj = {}
    for (let i = 0; i < ary.length; i++)
      obj[ary[i][0]] = ary[i][1]
    return obj
  }

  function head(ary) {
    return ary[0]
  }

  function identity() {
    return arguments[0]
  }

  function indexOf(ary, value, fromIndex = 0) {
    for (let i = fromIndex; i < ary.length; i++) {
      if (value == ary[i])
        return i
    }
  }

  function initial(ary) {
    return ary.slice(0, ary.length - 1)
  }

  function reverse(ary) {
    var length = (ary.length - 1) >> 1
    for (let i = 0, j = ary.length - 1; i < length; i++, j--) {
      var temp = ary[i]
      ary[i] = ary[j]
      ary[j] = temp
    }
    return ary
  }

  function sortedIndex(ary, value) {
    if (ary[0] > value || ary.length == 0)
      return 0
    else if (ary[ary.length - 1] < value)
      return ary.length
    var left = 0, right = ary.length - 1
    var middle = Math.trunc((left + right) / 2)
    while (right - left != 1) {
      if (ary[middle] > value) {
        right = middle
        middle = Math.trunc((left + right) / 2)
      } else
        if (ary[middle] < value) {
          left = middle
          middle = Math.trunc((left + right) / 2)
        }
        else
          return middle
    } return right
  }

  // function every(collection, predicate = _.identity) {
  //   for (let i = 0; i < collection.length; i++){
  //     if()
  //   }
  // }

  function max(ary) {
    if (ary.length == 0)
      return undefined
    var max = ary[0]
    for (let i = 1; i < ary.length; i++)
      max = max > ary[i] ? max : ary[i]
    return max
  }

  function maxBy(array, iteratee = identity) {

  }

  function min(ary) {
    if (ary.length == 0)
      return undefined
    var min = ary[0]
    for (let i = 1; i < ary.length; i++)
      min = min < ary[i] ? min : ary[i]
    return min
  }

  function sum(ary) {
    var sum = 0
    for (let i = 0; i < ary.length; i++)
      sum += ary[i]
    return sum
  }

  function toArray(value) {
    if (typeof (value) == 'number' || !value)
      return []
    else if (typeof (value) == "object") {
      var ary = []
      for (let keys in obj)
        ary.push(obj[keys])
      return (aaa)
    } else if (typeof (value) == "string") {
      return value.split('')
    }
  }

  return {
    chunk,
    compact,
    difference,
    differenceBy,
    drop,
    dropRight,
    fill,
    findIndex,
    flatten,
    flattenDeep,
    // flattenDepth,
    fromPairs,
    head,
    identity,
    indexOf,
    initial,
    reverse,
    sortedIndex,

    toArray,
    max,
    min,
    sum,
  }
}()