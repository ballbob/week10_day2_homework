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
    deinonychus = new Dinosaur("Deinonychus",12)
    utahraptor = new Dinosaur("Utahraptor", 20)
    velociraptor = new Dinosaur("Velociraptor",35)
    bambiraptor = new Dinosaur("Bambiraptor",40)
  })
})