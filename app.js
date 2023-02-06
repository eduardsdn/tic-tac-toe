function Game(){
    // true X turn, false O turn
    this.whosTurn = true 

    this.swapTurn = function(){
        game.whosTurn = !this.whosTurn
    }

    this.winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    this.checkWin = function(){

        tilesArray = Array.prototype.slice.call(gameBoard.tiles)
        for(let i = 0; i < this.winningCombinations.length; i++){
            let counterX = 0
            let counterO = 0
            for(let j = 0; j < this.winningCombinations[i].length; j++){
                if(tilesArray[this.winningCombinations[i][j]].classList.contains("X")){
                    counterX ++
                }
                if(counterX === 3){
                    console.log("X-win")
                    this.gameOver("X")
                }
    
                if(tilesArray[this.winningCombinations[i][j]].classList.contains("O")){
                    counterO ++
                }
                if(counterO === 3){
                    console.log("O-win")
                    this.gameOver("O")
                }
            }
            
        }    
    }

    this.gameOver = function(whoWon){
        document.querySelector(".wrapper-game-on").style.display = "none"
        document.querySelector(".wrapper-game-over").classList.add("show") 
        document.querySelector(".winner").innerHTML = `${whoWon} is the Winner`
    }
}

function Player(marker){
    this.marker = marker
}

function GameBoard(){
    this.tiles = document.querySelectorAll(".tile")

    const handleClick = function(e) {
        const tile = e.target
        const currentPlayer = game.whosTurn ? playerX.marker : playerO.marker
        gameBoard.MarkTile(tile, currentPlayer)
        game.swapTurn()
        game.checkWin()
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

const playerX = new Player("X")
const playerO = new Player("O")


