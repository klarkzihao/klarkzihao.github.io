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

  // function dropRightWhile(array, predicate = _.identity) {

  // }

  function fill(ary, value, start = 0, end = ary.length) {
    for (let i = start; i < end; i++)
      ary[i] = value
    return ary
  }

  function findIndex(users, predicate = identity, fromIndex = 0) {
    if (typeof (predicate) == "function") {
      for (let i = fromIndex; i < users.length; i++) {
        if (predicate(users[i]))
          return i
      }
    } else

      if (typeof (predicate) == "string") {
        for (let i = 0; i < users.length; i++) {
          if (users[i][predicate])
            return i
        }
      }

      else
        if (typeof (predicate == "object")) {
          for (let i = fromIndex; i < users.length; i++) {
            let count = 0
            for (let j = 0; j < Object.keys(predicate).length; j++) {
              if (Object.values(users[i])[j] == Object.values(predicate)[j])
                count++
              else
                break
            }
            if (count == Object.keys(predicate).length)
              return i
          }
        } else
          if (Array.isArray(predicate)) {
            for (let i = fromIndex; i < users.length; i++) {
              if (users[i][predicate[0]] == predicate[1])
                return i
            }
          }
  }


  function findLastIndex(users, predicate = identity, fromIndex = users.length - 1) {
    if (typeof (predicate) == "function") {
      for (let i = fromIndex; i < users.length; i++) {
        if (predicate(users[i]))
          return i
      }
    } else
      if (Array.isArray(predicate)) {
        for (let i = fromIndex; i < users.length; i++) {
          if (users[i][predicate[0]] == predicate[1])
            return i
        }
      } else
        if (typeof (predicate == "object")) {
          for (let i = fromIndex; i < users.length; i++) {
            let count = 0
            for (let j = 0; j < Object.keys(predicate).length; j++) {
              if (Object.values(users[i])[j] == Object.values(predicate)[j])
                count++
              else
                break
            }
            if (count == Object.keys(predicate).length)
              return i
          }
        } else
          if (typeof (predicate) == "string") {
            for (let i = 0; i < users.length; i++) {
              if (users[i][predicate])
                return i
            }
          }
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

  function join(ary, separator = ',') {
    let result = ''
    for (let i = 0; i < ary.length - 1; i++) {
      result = result + ary[i] + separator
    }
    result += ary[ary.length - 1]
    return result
  }

  function last(array) {
    return array[array.length - 1]
  }

  function lastIndexOf(array, value, fromIndex = array.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (array[i] == value)
        return i
    }
    return -1
  }

  function pull(array, values = '') {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == values)
        array.splice(i, 1)
    }
  }

  function remove(array, predicate = this.identity) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i])) {
        newArray.push(array[i])
        array.splice(i, 1)
        i--
      }
    }
    return newArray
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

  function maxBy(objects, iteratee = identity) {
    let max = -Infinity
    let maxNum = 0
    if (typeof (iteratee) == "function") {
      for (let i = 0; i < Object.keys(objects).length; i++) {
        if (max < iteratee(objects[i])) {
          max = iteratee(objects[i])
          maxNum = i
        }

      }
    }
    else if (typeof (iteratee == 'string')) {
      for (let i = 0; i < Object.keys(objects).length; i++) {
        if (max < objects[i][iteratee]) {
          max = objects[i][iteratee]
          maxNum = i
        }
      }
    }
    return objects[maxNum]
  }

  function min(ary) {
    if (ary.length == 0)
      return undefined
    var min = ary[0]
    for (let i = 1; i < ary.length; i++)
      min = min < ary[i] ? min : ary[i]
    return min
  }

  function minBy(objects, iteratee = identity) {
    let min = Infinity
    let minNum = 0
    if (typeof (iteratee) == "function") {
      for (let i = 0; i < Object.keys(objects).length; i++) {
        if (min > iteratee(objects[i])) {
          min = iteratee(objects[i])
          minNum = i
        }
      }
    }
    else if (typeof (iteratee == 'string')) {
      for (let i = 0; i < Object.keys(objects).length; i++) {
        if (min > objects[i][iteratee]) {
          min = objects[i][iteratee]
          minNum = i
        }
      }
    }
    return objects[minNum]
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

  function union(...args) {
    let result = []
    let map = {}
    for (let i = 0; i < args.length; i++) {
      for (let j = 0; j < args[i].length; j++) {
        if (!(args[i][j] in map)) {
          map[args[i][j]] = 1
          result.push(args[i][j])
        }
      }
    }
    return result
  }

  function unionBy(...args) {
    let iteratee = args[args.length - 1]
    let result = []
    let map = {}
    if (typeof (iteratee) == 'function') {
      for (let i = 0; i < args.length - 1; i++) {
        for (let j = 0; j < args[i].length; j++) {
          if (!(iteratee(args[i][j]) in map)) {
            map[iteratee(args[i][j])] = 1
            result.push(args[i][j])
          }
        }
      }
    } else
      if (typeof (iteratee) == 'string') {
        for (let i = 0; i < args.length - 1; i++) {
          for (let j = 0; j < args[i].length; j++) {
            if (!(args[i][j][iteratee] in map)) {
              map[args[i][j][iteratee]] = 1
              result.push(args[i][j])
            }
          }
        }
      }
    return result
  }

  function uniq(...args) {
    let result = []
    let map = {}
    args.forEach(item => {
      item.forEach(it => {
        if (!(it in map)) {
          map[it] = it
          result.push(it)
        }
      })
    })
    return result
  }

  // function uniqBy(...args) {
  //   let iteratee = args[args.length - 1]
  //   let result = []
  //   let map = {}
  //   if (typeof (iteratee == "function")) {
  //     for (let i = 0; i < args.length - 1; i++){
  //       for (let j = 0; j < args[i].length; j++){
  //         if(!(args[i][j]))
  //       }
  //     }
  //   }

  //   return result
  // }

  // function groupBy(collection, iteratee) {
  //   let result = {}
  //   if()
  //   }
  // }


  //Lodash lang functions
  function isArray(value) {
    return Array.isArray(value)
  }

  function isBoolean(value) {
    return value === true || value === false
  }

  function isFunction(value) {
    return typeof (value) === "function"
  }

  function isNaN(value) {
    return window.isNaN(value)
  }

  function isNumber(value) {
    return typeof (value) === "number"
  }

  function isObject(value) {
    return !isArray(value) && typeof (value) === "object"
  }

  function isString(value) {
    return typeof (value) === "string"
  }

  function sameType(value, other) {
    if (typeof (value) !== typeof (other))
      return false
    if (this.isNaN(value) || this.isNaN(other) || this.isArray(value) || this.isArray(value)) {
      if (this.isArray(value) && this.isArray(other))
        return true
      else if (this.isNumber(value) && this.isNumber(other)) {
        if ((this.isNaN(value) && this.isNaN(other)))
          return true
        else
          return false
      }
      else
        return false
    }
    return true
  }

  function isEqual(value, other) {
    if (!this.sameType(value, other))
      return false
    else {
      if (this.isArray(value)) {
        if (value.length == other.length)
          return value.every((it, i) => it === other[i])
        else
          return false
      }
      if (this.isObject(value)) {
        if (Object.keys(value).length == Object.keys(other).length)
          return Object.keys(value).every(it => value[it] === other[it])
        else
          return false
      }
      if (value === other)
        return true
      else
        return false
    }
  }


  return {
    chunk,
    compact,
    difference,
    differenceBy,
    drop,
    dropRight,
    // dropRightWhile,
    fill,
    findIndex,
    findLastIndex,
    flatten,
    flattenDeep,
    // flattenDepth,
    fromPairs,
    head,
    identity,
    indexOf,
    initial,
    join,
    last,
    lastIndexOf,
    // pull,
    remove,
    reverse,
    sortedIndex,

    toArray,
    max,
    maxBy,
    min,
    minBy,
    sum,
    union,
    unionBy,
    uniq,


    isArray,
    isBoolean,
    isFunction,
    isNaN,
    isNumber,
    isObject,
    isString,
    sameType,
    isEqual,
  }
}()