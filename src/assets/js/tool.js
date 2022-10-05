export default {
  /**
   * Long int is result of converted from Number with unit.
   * String is result of correct format adopted regular expression.
   * Units are letter that is 'k' or 'm'.
   * @param {Units to be converted} str 
   */
  unitFormat(str) {
    var v = /[1-9]+[0-9]*[kKmM]?/g.exec(str)
    if (v) {
      v = v[0]
    } else {
      return null
    }
    var n = 0

    var s = v[v.length - 1]
    if (s == 'k' || s == 'K') {
      n = Number(v.substring(0, v.length - 1)) * 1000
    } else if (s == 'm' || s == 'M') {
      n = Number(v.substring(0, v.length - 1)) * 1000000
    } else {
      n = Number(v)
    }

    return [v, n]
  },
}