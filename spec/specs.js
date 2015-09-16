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
    testSpace.selectSquare((testPlayer.mark));
    expect(testSpace.markedBy()).to.equal("X");
  });
});

describe('Board', function() {
  it("creates 9 spaces when it is initialized", function() {
    var testBoard = new Board();
    expect(testBoard.playBoard.length).to.equal(9);
  });

  // it("finds a space by coordinates", function() {
  //   var testBoard = new Board();
  //   var testSpace = new Space(1, 2);
  //   expect(testBoard.findSpace(testSpace)).to.equal(testSpace);
  // });
});
