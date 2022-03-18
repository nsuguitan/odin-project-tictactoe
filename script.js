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
} ;


const gameBoard = (() => {
    board = Array(9).fill("0")
    turnCount = 0;
    const update = (position) => {
        if(turnCount % 2 == 0) {board[position] = 1}
        else{board[position] = -1};
        turnCount ++;       
    }    
}
)();

const play = (() => {
    const p1 = Player("player 1", "X");
    const p2 = Player("player 2", "O");
    let turn = p1;
    
    const changeTurn = (buttonId) =>{
        if(turn == p1){turn == p2}
        else {turn == p1};
    }
    const getTurn = ()=> {
        console.log("This is p1:",p1);
        return turn;
    };
    return{changeTurn, getTurn}
}
)(); 
const displayController = (() => {
    //const htmlBoard = Array.from(document.querySelectorAll('button.child'));
    const updateSquare = (buttonId) =>{
        
        console.log("Heyoooo");
        console.log(buttonId);
        var elem = document.getElementById(buttonId);
        console.log("This is getTurn call",play.getTurn());
        console.log(play.getTurn().getSymbol());
        if (elem.textContent=="") elem.textContent = play.getTurn().getSymbol();
        else elem.textContent = "Hello";
    };
    return{updateSquare}
}
)(); 