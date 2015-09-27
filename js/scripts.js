function Player(mark) {
  this.mark = mark;
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

  var playerX = new Player("X");
  this.players.push(playerX);

  var playerO = new Player("O");
  this.players.push(playerO);

  this.board = new Board();

  this.currentTurn = playerX;

  this.over = false;
}

Game.prototype.changeTurn = function() {
  if (this.over === false) {
    if (this.currentTurn === this.players[0]) {
      this.currentTurn = this.players[1];
    } else {
      this.currentTurn = this.players[0];
    }
  }
}

Game.prototype.isOverWinner = function() {
  if (this.board.winner() === true) {
    this.over = true;
    return true;
  } else {
    return false;
  }
}

Game.prototype.isOverCats = function() {
  var allSelected = null;
  this.board.playBoard.forEach(function(space) {
    if (space.playerMark === null) {
      allSelected = false;
    }
  });
  if (allSelected === null) {
    allSelected = true;
  }

  if (allSelected === true && this.board.winner() === false) {
    this.over = true;
    return true;
  } else {
    return false;
  }
}

$(document).ready(function(event) {

  var game = new Game();

  $(".spot").click(function(event) {
    event.preventDefault();

    var selectedSpot = parseInt($(this).attr("id"));

    if (game.over === false) {
      if (game.board.playBoard[selectedSpot].playerMark === null) {
        var currentPlayer = game.currentTurn;
        game.board.playBoard[selectedSpot].selectSquare(currentPlayer);

        $(this).text(currentPlayer.mark);
        game.isOverWinner();
        game.isOverCats();
        game.changeTurn();
      }

      if (game.over === true) {
        if (game.isOverWinner() === true) {
          alert("Game Over. " + game.currentTurn.mark + " wins!");
        }

        if (game.isOverCats() === true) {
          alert("Cat's Game. Play again!");
        }
      }
    }
  });
});
