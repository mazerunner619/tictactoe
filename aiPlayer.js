// const board = new Array(10).fill("");

const gameOver = (board) => {
  for (let i = 0; i < 9; i++) {
    if (board[i] === "") return false;
  }
  return true;
};

const winner = (board, p) => {
  if (
    (board[0] === p && board[1] === p && board[2] === p) ||
    (board[3] === p && board[4] === p && board[5] === p) ||
    (board[6] === p && board[7] === p && board[8] === p) ||
    (board[0] === p && board[3] === p && board[6] === p) ||
    (board[1] === p && board[4] === p && board[7] === p) ||
    (board[2] === p && board[5] === p && board[8] === p) ||
    (board[0] === p && board[4] === p && board[8] === p) ||
    (board[2] === p && board[4] === p && board[6] === p)
  )
    return true;
  else return false;
};

const evaluate = (board, player = "❌") => {
  const opp = player === "❌" ? "⭕" : "❌";
  if (winner(board, player)) return 10;
  if (winner(board, opp)) return -10;
  return 0;
};

const minmax_value = (board, depth, isMax, player = "❌") => {
  const opp = player === "❌" ? "⭕" : "❌";
  let res = evaluate(board, player);
  if (res !== 0) return res;
  if (gameOver(board)) return 0;
  if (isMax) {
    res = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (board[i] === "") {
        board[i] = player;
        res = Math.max(res, minmax_value(board, depth + 1, !isMax, player));
        board[i] = "";
      }
    }
  } else {
    res = Infinity;
    for (let i = 0; i < 9; i++) {
      if (board[i] === "") {
        board[i] = opp;
        res = Math.min(res, minmax_value(board, depth + 1, !isMax, player));
        board[i] = "";
      }
    }
  }
  return res;
};

function nextMove(board, player = "❌") {
  let score = -Infinity,
    move = -1;
  for (let i = 0; i < 9; i++) {
    if (board[i] === "") {
      board[i] = player;
      let res = minmax_value(board, 1, 0, player);
      if (res > score) {
        score = res;
        move = i;
      }
      board[i] = "";
    }
  }
  return move;
}

module.exports = { nextMove, winner, gameOver };
