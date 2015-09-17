describe('Player', function() {
  it("returns the player's mark", function() {
    var testPlayer = new Player("X");
    expect(testPlayer.mark).to.equal("X");
  });
});

describe('Space', function() {
  it("returns the player's mark", function() {
    var testSpace = new Space(1, 2);
    expect(testSpace.xCoordinate).to.equal(1);
  });

  it("returns the player's mark", function() {
    var testSpace = new Space(1, 2);
    expect(testSpace.yCoordinate).to.equal(2);
  });

  it("lets a player mark a space", function() {
    var testPlayer = new Player("X");
    var testSpace = new Space(1, 2);
    testSpace.selectSquare((testPlayer));
    expect(testSpace.markedBy()).to.equal(testPlayer);
  });
});

describe('Board', function() {
  it("creates 9 spaces when it is initialized", function() {
    var testBoard = new Board();
    expect(testBoard.playBoard.length).to.equal(9);
  });

  it("finds a space by coordinates", function() {
    var testBoard = new Board();
    expect(testBoard.find(1, 2)).to.equal(testBoard.playBoard[5]);
  });

  it("tells if there is a winner by finding three spaces in a row marked by the same player", function() {
    var testBoard = new Board();
    var playerX = new Player("X");
    var playerO = new Player("O");
    testBoard.find(0,0).selectSquare(playerX);
    testBoard.find(0,1).selectSquare(playerX);
    testBoard.find(0,2).selectSquare(playerX);
    expect(testBoard.winner()).to.equal(true);
  });

  it("tells if there is not a winner by finding three spaces in a row marked by different players", function() {
    var testBoard = new Board();
    var playerX = new Player("X");
    var playerO = new Player("O");
    testBoard.find(0,0).selectSquare(playerX);
    testBoard.find(0,1).selectSquare(playerO);
    testBoard.find(0,2).selectSquare(playerX);
    expect(testBoard.winner()).to.equal(false);
  });

  it("tells if there is not a winner if a row includes null", function() {
    var testBoard = new Board();
    var playerX = new Player("X");
    var playerO = new Player("O");
    testBoard.find(0,0).selectSquare(playerX);
    testBoard.find(0,1).selectSquare(null);
    testBoard.find(0,2).selectSquare(playerX);
    expect(testBoard.winner()).to.equal(false);
  });
});

describe('Game', function() {
  it("creates 2 players when it is initialized", function() {
    var testGame = new Game();
    expect(testGame.players.length).to.equal(2);
  });

  it("creates a board when it is initialized", function() {
    var testGame = new Game();
    expect(testGame.board.playBoard.length).to.equal(9);
  });
});
