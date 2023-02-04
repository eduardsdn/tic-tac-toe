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

playerX = new Player("X")
playerO = new Player("O")


function GameBoard(){
    this.tiles = document.querySelectorAll(".tile")

    const handleClick = function(e) {
        const tile = e.target
        const currentPlayer = game.whosTurn ? playerX.marker : playerO.marker
        gameBoard.MarkTile(tile, currentPlayer)
        game.swapTurn()
    }

    this.tiles.forEach(tile => {
        tile.addEventListener('click', handleClick, {once: true})
    })

    this.MarkTile = function(tile, currentPlayer){
        tile.classList.add(currentPlayer)
    }

}

game = new Game

gameBoard = new GameBoard