var Piece = require("./piece.js").Piece;

function Board() {
  this.grid = [
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, new Piece('white'), new Piece('black'), null, null, null],
  [null, null, null, new Piece('black'), new Piece('white'), null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null]
  ]

  this.dirs = [[0, 1], [0, -1], [1, 0], [1, 1],
              [1, -1], [-1, 1], [-1, 0], [-1, -1]]
}

Board.prototype.full = function () {
  for (var i = 0; i < 8; i++){
    for (var j = 0; j < 8; j++){
      if(!this.occupied([i,j])){
        return false;
      }
    }
  }
  return true;
};

Board.prototype.occupied = function(pos){
  return (!!this.grid[pos[0]] && !!this.grid[pos[0]][pos[1]])
}

Board.prototype.toString = function(){
  var lines = "";
  for (var i = 0; i < 8; i++){
    var line = ""
    for(var j = 0; j < 8; j++){
      line += " " + this.grid[i][j]
    }
    lines += "\n"
    lines += line
  }
  return lines
}

// Other helper methods may be helpful!
// check what directions pieces of another color are in

// define all 8 direction vectors
// for each direction vector, check if the piece in that direction is of the other color
//
//

Board.prototype.pieceChain = function(pos, dir, color){
  var grid = this.grid;
  var that = this;
  var results = [];
  var helper = function(pos, dir, color){
    pos[0] += dir[0];
    pos[1] += dir[1];


    if(!that.occupied(pos)){
      results = []
    } else if (grid[pos[0]][pos[1]].color === color){
      ;
    }
    else{
      results.push(grid[pos[0]][pos[1]]);
      helper(pos, dir, color);
    }
  }
  helper(pos, dir, color);
  return results;
}


Board.prototype.allPieceChains = function(pos, color){
  var allResults = [];

  for (var i = 0; i < this.dirs.length; i++){
    piecesToFlip = this.pieceChain(pos.slice(), this.dirs[i], color);
    allResults = allResults.concat(piecesToFlip);
  }
  return allResults;
}

exports.Board = Board;

