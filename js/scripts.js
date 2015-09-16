function Player(mark) {
  this.mark = mark;
}

function Space(xCoordinate, yCoordinate, playerMark) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.playerMark = playerMark;
}

Space.prototype.selectSquare = function(mark) {
  this.playerMark = mark;
  return (this.xCoordinate, this.yCoordinate);
}

Space.prototype.markedBy = function(xCoordinate, yCoordinate) {
  return this.playerMark;
}
