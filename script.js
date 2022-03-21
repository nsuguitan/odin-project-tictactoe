const Player = (name,symbol) => { //factory function for tic tac toe players
    const getName = () => name;
    const getSymbol = () => symbol;
    const winner = () => {

    };
    return{getName, getSymbol, winner}
}

const gameBoard = (() => {
    let board = Array(9).fill("0")
    const update = (buttonId) => {
        position = buttonId.charAt(1)
        if(play.getTurn().getSymbol() == "X") {board[position] = 1}
        else{board[position] = -1};  
    } 
    const getBoard =() =>{
        return board;
    };  
    const reset =() =>{
        board = Array(9).fill("0");
    };  
    return{update, getBoard, reset}
}
)();

const play = (() => {
    const p1 = Player("player 1", "X");
    const p2 = Player("player 2", "O");
    let turn = p1;
    let btn_reset = document.getElementById("resetButton")

    btn_reset.addEventListener("click", () => {
        displayController.reset();
        gameBoard.reset();
    });
    
    const takeTurn = (buttonId) =>{
        if (validMoveCheck(buttonId)){
            displayController.updateSquare(buttonId);
            gameBoard.update(buttonId);
            setTimeout(() => {
                if(checkWinner(buttonId)){
                    alert("Winner winner chicken dinner!")
                };
                }, 200);
            changeTurn();
        }
    };
    const validMoveCheck = (buttonId) => {
        var elem = document.getElementById(buttonId);
        if (elem.textContent=="") {
            return true;
            }
        else{
            alert("You can't go there, you silly nugget! Try again :P");
            return false;        
        };
    }
    const changeTurn = (buttonId) =>{
        console.log("changing turns")
        if(turn == p1){
            turn = p2;
            console.log("testing checkpoint:", turn.getName());
        }
        else {turn = p1};
        console.log("changing to:", turn.getName())
    }
    const getTurn = ()=> {
        console.log("This is p1:",p1);
        return turn;
    };
    const checkWinner = (buttonId) => {
        lastMove = buttonId.charAt(1);
        board = gameBoard.getBoard();
        //check row
        rowStart = Math.floor(lastMove/3) * 3
        console.log("Indexes checked for Row = ", rowStart, rowStart+1, rowStart + 2)
        if(Math.abs(board[rowStart] + board[rowStart + 1] + board[rowStart+2]) == 3){return true}
        //check col
        console.log("Indexes checked for Col = ", lastMove, (lastMove + 3)%9, (lastMove + 6)%9)
        if(Math.abs(board[lastMove] + board[(lastMove+3)%9] + board[(lastMove + 6)%9]) == 3){return true}
        //check left diagonal
        if(lastMove%4 == 0 && Math.abs(board[0] + board[4] + board[8]) == 3){return true}
        //check right diagonal, but checks when position 0 and 8 are played as well
        if(lastMove%2 == 0 && Math.abs(board[2] + board[4] + board[6]) == 3){return true}
        else {return false} 
        };
        
    return{changeTurn, getTurn, takeTurn, validMoveCheck, checkWinner}
}
)(); 
const displayController = (() => {
    const htmlBoard = Array.from(document.querySelectorAll('button.child'));
    const updateSquare = (buttonId) =>{
        var elem = document.getElementById(buttonId);
        elem.textContent = play.getTurn().getSymbol();
    };
    const reset = () =>{
        htmlBoard.forEach((x, i) => x.textContent = "")
    };
    return{updateSquare, reset}
}
)(); 