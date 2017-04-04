var assert = require('assert')
var Dinosaur = require('../dinosaur.js')
var Park = require('../park.js')

describe('Park',function(){
  var park
  var deinonychus
  var utahraptor
  var velociraptor
  var bambiraptor

  beforeEach(function(){
    park = new Park()
    
    deinonychus = new Dinosaur("Deinonychus",12,"Dromaeosaur")
    utahraptor = new Dinosaur("Utahraptor", 20,"Dromaeosaur")
    velociraptor = new Dinosaur("Velociraptor",35,"Dromaeosaur")
    bambiraptor = new Dinosaur("Bambiraptor",40,"Dromaeosaur")

    spinosaurus = new Dinosaur("Spinosaurus",2.12,"Spinosaurid")
  })

  it('should start empty', function(){
    assert.strictEqual(0,park.dromaeoEnclosure())
    assrt.strictEqual(0,park.spinoEnclosure())
  })
})