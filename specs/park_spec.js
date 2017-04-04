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
    assert.strictEqual(undefined,park.dromaeoEnclosure[0])
    assert.strictEqual(undefined,park.spinoEnclosure[0])
  })

  it('should be able to add a dromaeo', function(){
    park.addDromaeo(bambiraptor)
    assert.strictEqual("Bambiraptor",park.dromaeoEnclosure[0].name)
  })

  it('should be able to add a spino', function(){
    park.addSpino(spinosaurus)
    assert.strictEqual("Spinosaurus",park.spinoEnclosure[0].name)
  })

  it('should be able to let the dromaeos out, like in every single film, for some reason', function(){
    park.addDromaeo(deinonychus)
    park.addDromaeo(utahraptor)
    park.addDromaeo(velociraptor)
    park.addDromaeo(bambiraptor)
    
    park.clearDromaeo()

    assert.strictEqual(undefined,park.dromaeoEnclosure[0])
  })

  it('should be able to let the spinos out, too', function(){
    park.addSpino(spinosaurus)

    park.clearSpino()

    assert.strictEqual(undefined,park.spinoEnclosure[0])
  })

  it('should show that Velociraptor and Bambiraptor have an r over 25',function(){

    park.addSpino(spinosaurus)

    park.addDromaeo(deinonychus)
    park.addDromaeo(utahraptor)
    park.addDromaeo(velociraptor)
    park.addDromaeo(bambiraptor)

    assert.deepEqual(['Velociraptor','Bambiraptor'],park.growthRateOver(25))
  })

})