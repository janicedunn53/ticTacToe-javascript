function Player(mark) {
  this.mark = mark;
}

function Space(xCoordinate, yCoordinate) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.playerMark = null;
}

Space.prototype.selectSquare = function(mark) {
  this.playerMark = mark;
  return (this.xCoordinate, this.yCoordinate);
}

Space.prototype.markedBy = function(xCoordinate, yCoordinate) {
  return this.playerMark;
}

function Board() {
  this.playBoard = [];

  this.playBoard.push(new Space(0,0));
  this.playBoard.push(new Space(0,1));
  this.playBoard.push(new Space(0,2));
  this.playBoard.push(new Space(1,0));
  this.playBoard.push(new Space(1,1));
  this.playBoard.push(new Space(1,2));
  this.playBoard.push(new Space(2,0));
  this.playBoard.push(new Space(2,1));
  this.playBoard.push(new Space(2,2));
}

Board.prototype.findSpace = function(space) {
  for(var i = 0; i < this.playBoard.length; i++) {
    if (this.playBoard[i].xCoordinate === space.xCoordinate && this.playBoard[i].yCoordinate === space.yCoordinate) {
      return space;
    }
  }
}
