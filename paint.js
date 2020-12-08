const Paint = function (colour, volume, isEmpty=false) {
    this.colour = colour;
    this.volume = volume;
    this.isEmpty = isEmpty;
  }

  Paint.prototype.emptyPaintCan = function () {
    this.volume = 0;
    this.isEmpty = true;
  }

  module.exports = Paint;