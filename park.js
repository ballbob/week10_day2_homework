var Park = function(){
  this.dromaeoEnclosure = new Array()
  this.spinoEnclosure = new Array()
}

Park.prototype = {

  // Dromaeosaur enclosure functions
  addDromaeo: function(dromaeo){
    this.dromaeoEnclosure.push(dromaeo)
  },

  clearDromaeo: function(){
    this.dromaeoEnclosure.length = 0
  },


  //Spinosaur enclosure functions
  addSpino: function(spino){
    this.spinoEnclosure.push(spino)
  },

  clearSpino: function(){
    this.spinoEnclosure.length = 0
  },


  //Park-wide functions
  growthRateOver: function(rate){
    var fecundDinos = new Object()
    
    for (var i; i < this.dromaeoEnclosure.length; i++){
      if(this.dromaeoEnclosure[i].r > rate){
        var name = this.dromaeoEnclosure[i].name
        fecundDinos.unshift(name)
      }
    }
    
    for (var i; i < this.spinoEnclosure.length; i++){
      if (this.spinoEnclosure[i].r > rate){
        var name = this.spinoEnclosure[i].name
        fecundDinos.unshift(name)
      }
    }
    
    return "The dinos with growth rates over", rate, "are", fecundDinos
  
  }

}

module.exports = Park