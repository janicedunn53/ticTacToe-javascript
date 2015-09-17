function Player(mark) {
  this.mark = mark;
}

function switchPlayer() {
  if (turn === "X") {
    turn = "O";
  } else {
    turn = "X"
  }
}

function Space(xCoordinate, yCoordinate) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.playerMark = null;
}

Space.prototype.selectSquare = function(player) {
  this.playerMark = player;

}

Space.prototype.markedBy = function() {
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

Board.prototype.find = function(xCoordinate, yCoordinate) {
  for(var i = 0; i < this.playBoard.length; i++) {
    if (this.playBoard[i].xCoordinate === xCoordinate && this.playBoard[i].yCoordinate === yCoordinate) {
      return this.playBoard[i];
    }
  }
}

Board.prototype.winner = function() {
  if( ( (this.find(0,0).markedBy() === null || this.find(0,1).markedBy() === null || this.find(0,2).markedBy() === null) === false ) && ( ( (this.find(0,0).markedBy().mark === this.find(0,1).markedBy().mark) && (this.find(0,1).markedBy().mark === this.find(0,2).markedBy().mark) ) === true ) ) {
    return true;
  } else if( ( (this.find(1,0).markedBy() === null || this.find(1,1).markedBy() === null || this.find(1,2).markedBy() === null) === false ) && ( ( (this.find(1,0).markedBy().mark === this.find(1,1).markedBy().mark) && (this.find(1,1).markedBy().mark === this.find(1,2).markedBy().mark) ) === true ) ) {
    return true;
  } else if( ( (this.find(2,0).markedBy() === null || this.find(2,1).markedBy() === null || this.find(2,2).markedBy() === null) === false ) && ( ( (this.find(2,0).markedBy().mark === this.find(2,1).markedBy().mark) && (this.find(2,1).markedBy().mark === this.find(2,2).markedBy().mark) ) === true ) ) {
    return true;
  } else if( ( (this.find(0,2).markedBy() === null || this.find(1,2).markedBy() === null || this.find(2,2).markedBy() === null) === false ) && ( ( (this.find(0,2).markedBy().mark === this.find(1,2).markedBy().mark) && (this.find(1,2).markedBy().mark === this.find(2,2).markedBy().mark) ) === true ) ) {
    return true;
  } else if( ( (this.find(0,1).markedBy() === null || this.find(1,1).markedBy() === null || this.find(2,1).markedBy() === null) === false ) && ( ( (this.find(0,1).markedBy().mark === this.find(1,1).markedBy().mark) && (this.find(1,1).markedBy().mark === this.find(2,1).markedBy().mark) ) === true ) ) {
    return true;
  } else if( ( (this.find(0,0).markedBy() === null || this.find(1,0).markedBy() === null || this.find(2,0).markedBy() === null) === false ) && ( ( (this.find(0,0).markedBy().mark === this.find(1,0).markedBy().mark) && (this.find(1,0).markedBy().mark === this.find(2,0).markedBy().mark) ) === true ) ) {
    return true;
  } else if( ( (this.find(0,2).markedBy() === null || this.find(1,1).markedBy() === null || this.find(2,0).markedBy() === null) === false ) && ( ( (this.find(0,2).markedBy().mark === this.find(1,1).markedBy().mark) && (this.find(1,1).markedBy().mark === this.find(2,0).markedBy().mark) ) === true ) ) {
    return true;
  } else if( ( (this.find(0,0).markedBy() === null || this.find(1,1).markedBy() === null || this.find(2,2).markedBy() === null) === false ) && ( ( (this.find(0,0).markedBy().mark === this.find(1,1).markedBy().mark) && (this.find(1,1).markedBy().mark === this.find(2,2).markedBy().mark) ) === true ) ) {
    return true;
  } else {
    return false;
  }
}

function Game() {
  this.players = [];
  this.players.push(new Player("X"));
  this.players.push(new Player("O"));

  this.board = new Board();
}

var game = new Game();


$(document).ready(function(event) {

  $(".spot").click(function(event) {
    event.preventDefault();
    var currentPlayer = game.players[0];
    var selectedSpot = parseInt($(this).attr('id'));

    game.board.playBoard[selectedSpot].selectSquare(currentPlayer);
     $(this).addClass('canvas-color-1');
  });
});
