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

  dromaeosPerYear: function(){
    var eggsPerYear = 0
    for (var i = 0; i < this.dromaeoEnclosure.length; i++){
      eggsPerYear = eggsPerYear + this.dromaeoEnclosure[i].r 
    }
    return eggsPerYear
  },


  //Spinosaur enclosure functions
  addSpino: function(spino){
    this.spinoEnclosure.push(spino)
  },

  clearSpino: function(){
    this.spinoEnclosure.length = 0
  },

  spinosPerYear: function(){
    var eggsPerYear = 0

    for (var i = 0; i < this.spinoEnclosure.length; i++){
      eggsPerYear = eggsPerYear + this.spinoEnclosure[0].r 
    }

    return eggsPerYear
  },


  //Park-wide functions
  growthRateOver: function(rate){
    var fecundDinos = []
    
    for (var i = 0; i < this.dromaeoEnclosure.length; i++){
      if(this.dromaeoEnclosure[i].r > rate){
        var name = this.dromaeoEnclosure[i].name
        fecundDinos.push(name)
      }
    }
    
    for (var i = 0; i < this.spinoEnclosure.length; i++){
      if (this.spinoEnclosure[i].r > rate){
        var name = this.spinoEnclosure[i].name
        fecundDinos.push(name)
      }
    }
    
    return fecundDinos
  
  }

  

}

module.exports = Park