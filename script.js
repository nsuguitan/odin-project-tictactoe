const Player = (name,symbol) => { //factory function for tic tac toe players
    const getName = () => name;
    const getSymbol = () => symbol;
    const takeTurn = () => {

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
    
    
}

function checkWinner(lastMove, boardState){

}

play();