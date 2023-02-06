function Game(){
    // true X turn, false O turn
    this.whosTurn = true 

    this.swapTurn = function(){
        game.whosTurn = !this.whosTurn
    }
}

function Player(marker){
    this.marker = marker
}

const playerX = new Player("X")
const playerO = new Player("O")


function GameBoard(){
    this.tiles = document.querySelectorAll(".tile")

    const handleClick = function(e) {
        const tile = e.target
        const currentPlayer = game.whosTurn ? playerX.marker : playerO.marker
        gameBoard.MarkTile(tile, currentPlayer)
        game.swapTurn()
        checkWin()
    }

    this.tiles.forEach(tile => {
        tile.addEventListener('click', handleClick, {once: true})
    })

    this.MarkTile = function(tile, currentPlayer){
        tile.classList.add(currentPlayer)
    }
}

const game = new Game

const gameBoard = new GameBoard

const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]


let checkWin = function(){

    tilesArray = Array.prototype.slice.call(gameBoard.tiles)
    for(let i = 0; i < winningCombinations.length; i++){
        let counterX = 0
        let counterO = 0
        for(let j = 0; j < winningCombinations[i].length; j++){
            if(tilesArray[winningCombinations[i][j]].classList.contains("X")){
                counterX ++
            }
            if(counterX === 3){
                console.log("X-win")
            }

            if(tilesArray[winningCombinations[i][j]].classList.contains("O")){
                counterO ++
            }
            if(counterO === 3){
                console.log("O-win")
            }
        }
        
    }    
 }

// && winningCombinations[i][j] === tilesArray[j]

// if(tilesArray[winningCombinations[i][j]].classList.contains("X") && tilesArray[winningCombinations[i][j]].classList.contains("X") && tilesArray[winningCombinations[i][j+2]].classList.contains("X")){
            //     console.log("X-win")
            // }
