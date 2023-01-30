// for marks 0 = "O" 1 = "X" 2 = Blank tile


function Game(){

    // this.createPlayers = function(){
    //     player1 = new Player("X")
    //     player2 = new Player("O")
    //     return [player1, player2]
    // }
    this.activePlayer = 1
    

   this.newGame = function(){
    gameBoard = new GameBoard
    player1 = new Player()
    player2 = new Player()
   }
    

}


function Player(){             

    this.markTile = function(marks){
        marks = gameBoard.getMarks()
        tiles = document.querySelectorAll(".tile")
        tilesArray = [].slice.call(tiles, 0)
        for(let i = 0; i < tilesArray.length; i++){
            tilesArray[i].addEventListener('click', function(){

                if (game.activePlayer % 2 === 0){
                    marker = 1
                }
                else if(game.activePlayer % 2 > 0){
                    marker = 2
                }

                if(tilesArray[i].id === "one"){
                    marks[0] = marker
                    gameBoard.updateGameBoard()
                    game.activePlayer ++
                }
                else if(tilesArray[i].id === "two"){
                    marks[1] = marker
                    gameBoard.updateGameBoard()
                    game.activePlayer ++
                }
                else if(tilesArray[i].id === "three"){
                    marks[2] = marker
                    gameBoard.updateGameBoard()
                    game.activePlayer ++
                }
                else if(tilesArray[i].id === "four"){
                    marks[3] = marker
                    gameBoard.updateGameBoard()
                    game.activePlayer ++
                }
                else if(tilesArray[i].id === "five"){
                    marks[4] = marker
                    gameBoard.updateGameBoard()
                    game.activePlayer ++
                }
                else if(tilesArray[i].id === "six"){
                    marks[5] = marker
                    gameBoard.updateGameBoard()
                    game.activePlayer ++
                }
                else if(tilesArray[i].id === "seven"){
                    marks[6] = marker
                    gameBoard.updateGameBoard()
                    game.activePlayer ++
                }
                else if(tilesArray[i].id === "eight"){
                    marks[7] = marker
                    gameBoard.updateGameBoard()
                    game.activePlayer ++
                }
                else if(tilesArray[i].id === "nine"){
                    marks[8] = marker
                    gameBoard.updateGameBoard()
                    game.activePlayer ++
                }        
            })
        } 
    }
}


function GameBoard(){

    this.marks = [3,3,3,3,3,3,3,3,3]

    this.updateGameBoard = function(){
        tiles = document.querySelectorAll(".tile")
      
        tilesArray = [].slice.call(tiles, 0)

        for(let i = 0; i < this.marks.length; i++){
            if(this.marks[i] === 1){
                tilesArray[i].innerText ="O"
            }

            else if(this.marks[i] === 2){
                tilesArray[i].innerText ="X"
            }
        }
    }

    this.getMarks = function(){
        return this.marks
    }
}

game = new Game()
game.newGame()
player1.markTile()








