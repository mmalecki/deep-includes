var assert = require('assert')
var deepIncludes = require('../')

assert(deepIncludes([{ a: 12 }, { a: 42, b: 32 }], { a: 42, b: 32 }))
assert(!deepIncludes([{ a: 12 }, { b: 50 }], { a: 11 }))
