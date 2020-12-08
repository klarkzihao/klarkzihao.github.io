var klarkzihao = function () {
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