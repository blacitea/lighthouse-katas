const generateBoard = function (whiteQueen, blackQueen) {
  let board = [];
  // as board is 8 x 8 in size, use nested for-loop to push 8 rows
  for (let y = 0; y < 8; y++) {
    board.push([])
    // in each row, push 8 times to form 8 column
    for (let x = 0; x < 8; x++) {
      // when [y][x] equals position of queen, value = 1
      if (x === whiteQueen[1] && y === whiteQueen[0] || x === blackQueen[1] && y === blackQueen[0]) {
        board[y].push(1);
      } else {
        board[y].push(0);
      };
    };
  };
  return board;
};
  
const queenThreat = function (board) {
  // array to store positions of queens in board
  let queen = [];
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      // when identified, push position of queen as array into the queen array
      if (board[y][x] === 1) {
        queen.push([y, x]);
      };
    }
  };
  let threat = false;
  // if queen[0] and queen[1] share row/column/diagonal line, troggle threat to true
  if (queen[0][0] === queen[1][0] || queen[0][1] === queen[1][1] || Math.abs(queen[0][0] - queen[1][0]) === Math.abs(queen[0][1] - queen[1][1])) {
    threat = true;
  };
  return threat;
};


let whiteQueen = [5, 4];
let blackQueen = [6, 5];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));