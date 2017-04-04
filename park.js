var Park = function(){
  this.dromaeoEnclosure = new Array()
  this.spinoEnclosure = new Array()
}

Park.prototype = {
  addDromaeo: function(dromaeo){
    this.dromaeoEnclosure.push(dromaeo)
  },

  addSpino: function(spino){
    this.spinoEnclosure.push(spino)
  }
}

module.exports = Park