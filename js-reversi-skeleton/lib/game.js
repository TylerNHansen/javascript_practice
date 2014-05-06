var Piece = require("./piece.js").Piece;
var Board = require("./board.js").Board;
var readline = require('readline');

function Game() {
  this.board = new Board();
  this.currentPlayer = 'white';
  // Other attributes?
}

// You will certainly need some more helper methods...

Game.prototype.won = function () {

};

Game.prototype.placePiece = function (pos, color) {
  if (this.board.occupied(pos)){
    return -1;
  }
  else{
    pieces = this.board.allPieceChains(pos, color);
    if (pieces.length === 0){
      return -1;
    }
    else {
      for (var i = 0; i < pieces.length; i++){
        pieces[i].flip()
      }
      this.board.grid[pos[0]][pos[1]] = new Piece(color);
      return 1;
    }
  }
};

Game.prototype.runLoop = function () {
  var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  this.getMove(reader)

};

Game.prototype.getMove = function(reader) {
  that = this
  console.log(this.board.toString());
  reader.question("Where would you like to move?", function(answer){
    success = that.placePiece(that.parse(answer), that.currentPlayer);
    if(success === 1)
    {
      that.currentPlayer = that.currentPlayer === 'white' ? 'black' : 'white';
    }
    that.getMove(reader);
  });
}

Game.prototype.parse = function(line) {
  line = line.split(',');
  return [parseInt(line[0]), parseInt(line[1])];
}

exports.Game = Game;

g = new Game();
console.log(g.board.toString());
g.placePiece([3,5], 'white')
g.placePiece([4,5], 'black')
console.log(g.board.toString());
console.log(g.board.full());

g.runLoop();