var assert = require('assert')
var Dinosaur = require('../dinosaur.js')

describe('Dinosaur', function(){
  var deinonychus

  beforeEach(function(){
    deinonychus = new Dinosaur("Deinonychus",12)
  })

  it('should have a name',function(){
    assert.strictEqual("Deinonychus",deinonychus.name)
  })

  it('should have growth rate',function(){
    assert.strictEqual(12,deinonychus.r)
  })
})