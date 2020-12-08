const Room = function (name, area, isPainted=false) {
    this.name = name;
    this.area = area;
    this.isPainted = isPainted;
  }

  Room.prototype.paintRoom = function () {
    this.isPainted = true;
  }

  module.exports = Room;