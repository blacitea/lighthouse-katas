const generateBoard = function (whiteQueen, blackQueen) {
  let board = [];
  for (let y = 0; y < 8; y++) {
    board.push([])
    for (let x = 0; x < 8; x++) {
      if (x === whiteQueen[1] && y === whiteQueen[0] ||
          x === blackQueen[1] && y === blackQueen[0]) {
        board[y].push(1);
      } else {
        board[y].push(0);
      };
    };
  };
  let threat = false;
  // for horizontal
  let horizontal = function (accu, currV) {
    return accu + currV;
  };
  
  let sum = board[whiteQueen[0]].reduce(horizontal);
  if (sum >= 2) {
    threat = true;
  }
  
  // for vertical
  let VerticalSum = 0;
  for (let y = 0; y < 8; y++) {
    VerticalSum += board[y][whiteQueen[1]];
    console.log(whiteQueen[1], y, sum);
  };
  if (VerticalSum >= 2) {
    threat = true;
  };

  // for diagonal
  console.log(board);
  console.log(threat);

}

let whiteQueen = [2, 5];
let blackQueen = [2, 1];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);