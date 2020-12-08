var klarkzihao = function () {
  function chunk(ary, size = 1) {
    var result = []
    for (let i = 0; i < ary.length; i += size) {
      result.push(ary.slice(i, i + size))
    }
    return result
  }

  function compact(ary) {
    for (let i = 0; i < ary.length; i++) {
      if (!ary[i] || ary[i] == 0) {
        ary.splice(i, 1)
        i--
      }
    }
    return ary
  }

  return {
    compact,
  }
}()