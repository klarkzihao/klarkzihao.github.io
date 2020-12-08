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

  function drop(ary, n = 1) {
    return ary.slice(n)
  }

  function dropRight(ary, n = 1) {
    return ary.slice(0, ary.length - n)
  }

  function fill(ary, value, start = 0, end = ary.length) {
    for (let i = start; i < end; i++)
      ary[i] = value
    return ary
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
    var length = Math.trunc((ary.length - 1) / 2)
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

  return {
    chunk,
    compact,
    drop,
    dropRight,
    fill,
    fromPairs,
    head,
    indexOf,
    initial,
    reverse,
    sortedIndex
  }
}()