var klarkzihao = function () {
  function chunk(ary, size = 1) {
    var result = []
    for (let i = 0; i < ary.length; i += size) {
      result.push(ary.slice(i, i + size))
    }
    return result
  }

  function compact(ary) {
    var result = []
    for (let i = 0; i < ary.length; i++) {
      if (!ary[i] || ary[i] == 0)
        continue
      result.push(ary[i])
    }
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



  return {
    chunk,
    compact,
    drop,
    dropRight,
    fill,

  }
}()