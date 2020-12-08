const Room  = require('./room.js');

const Decorator = function (name) {
    this.name = name;
    this.paintStock = [];
  }
  Decorator.prototype.addPaint = function (paint) {
    this.paintStock.push(paint);
  }

  Decorator.prototype.quantityOfPaintInStock = function (paintStock) {
    let total = 0; 
    for(let currentPaint of paintStock){
      total += currentPaint['volume']
    }
    return total;
  }

  Decorator.prototype.canPaintRoom = function (room, paintStock){
    volumeOfPaint = this.quantityOfPaintInStock(paintStock)
    let canBePainted = false;
    if (room.area <= volumeOfPaint){
      canBePainted = true;
    }
    return canBePainted; 
  }


  Decorator.prototype.paintRoom = function (room, paintStock){
    canPaint = this.canPaintRoom(room, paintStock);
    let isPainted = false;
    if ( canPaint === true){
      room.paintRoom()
      isPainted = room.isPainted;
    }
  
    return isPainted; 
  }
  module.exports = Decorator;