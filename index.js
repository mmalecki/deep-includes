var deepEqual = require('deep-equal')

module.exports = function(arr, item) {
  return arr.some(function(arrItem) {
    return deepEqual(arrItem, item)
  })
}
