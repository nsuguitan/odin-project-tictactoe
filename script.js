const Player = (name,symbol) => { //factory function for tic tac toe players
    const getName = () => name;
    const getSymbol = () => symbol;
    const takeTurn = () => {
        position = 1; //get val from grid
        return position;

    };
    const winner = () => {

    };
    return{getName, getSymbol, takeTurn, winner}
}

function play(){
    console.log("Wanna play a game?")
    board = Array(9).fill("0")
    const p1 = Player("player 1", "X");
    const p2 = Player("player 2", "O");
    for (let i = 0; i < board.length; i++) {
        if(i%2 == 0){
            board[p1.takeTurn()] = 1;
        }
        else{
            board[p2.takeTurn()] = -1;
        }
        
      }
    //TRIGGER IT'S A TIE LOGIC or ADD TIE LOGIC TO CHECK WINNER
    
    
}

function checkWinner(lastMove, board){
//check row
rowStart = Math.floor(lastMove/3) * 3
console.log("Indexes checked for Row = ", rowStart, rowStart+1, rowStart + 2)
if(Math.abs(board[rowStart] + board[rowStart + 1] + board[rowStart+2]) == 3){return True}
//check col
console.log("Indexes checked for Col = ", lastMove, (lastMove + 3)%9, (lastMove + 6)%9)
if(Math.abs(board[lastMove] + board[(lastMove+3)%9] + board[(lastMove + 6)%9]) == 3){return True}
//check left diagonal
if(lastMove%4 == 0 && Math.abs(board[0] + board[4] + board[8]) == 3){return True}
//check right diagonal, but checks when position 0 and 8 are played as well
if(lastMove%2 == 0 && Math.abs(board[2] + board[4] + board[6]) == 3){return True}
} 


play();