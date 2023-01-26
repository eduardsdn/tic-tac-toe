// for marks 0 = "O" 1 = "X" 2 = Blank tile

function Game(){

    // this.createPlayers = function(){
    //     player1 = new Player("X")
    //     player2 = new Player("O")
    //     return [player1, player2]
    // }

    playerX = new Player("X")
    playerO = new Player("O")

    gameBoard = new GameBoard

    playerO.markTile(gameBoard.getMarks())
    
    gameBoard.updateGameBoard()

}


function Player(marker){             

    this.marker = marker

    this.markTile = function(marks){
    
        if (this.marker === "X"){
            marker = 1
        }
        else if(this.marker === "O"){
            marker = 0
        }

        tiles = document.querySelectorAll(".tile")
        tilesArray = [].slice.call(tiles, 0)
        for(let i = 0; i < tilesArray.length; i++){
            tilesArray[i].addEventListener('click', function(){
                if(tilesArray[i].id === "one"){
                    marks[0] = marker
                    gameBoard.updateGameBoard()
                    // console.log(gameBoard.marks)
                }
                else if(tilesArray[i].id === "two"){
                    marks[1] = marker
                    gameBoard.updateGameBoard()
                }
                else if(tilesArray[i].id === "three"){
                    marks[2] = marker
                    gameBoard.updateGameBoard()
                }
                else if(tilesArray[i].id === "four"){
                    marks[3] = marker
                    gameBoard.updateGameBoard()
                }
                else if(tilesArray[i].id === "five"){
                    marks[4] = marker
                    gameBoard.updateGameBoard()
                }
                else if(tilesArray[i].id === "six"){
                    marks[5] = marker
                    gameBoard.updateGameBoard()
                }
                else if(tilesArray[i].id === "seven"){
                    marks[6] = marker
                    gameBoard.updateGameBoard()
                }
                else if(tilesArray[i].id === "eight"){
                    marks[7] = marker
                    gameBoard.updateGameBoard()
                }
                else if(tilesArray[i].id === "nine"){
                    marks[8] = marker
                    gameBoard.updateGameBoard()
                }        
            })
        } 
    }
}


function GameBoard(){

    this.marks = [2,2,2,2,2,2,2,2,2]

    this.updateGameBoard = function(){
        tiles = document.querySelectorAll(".tile")
        // console.log(tiles)
        
        // marks here temporary (need to bring them to either Game obj or some other outer scope or obj)
        

        tilesArray = [].slice.call(tiles, 0)

        for(let i = 0; i < this.marks.length; i++){
            if(this.marks[i] === 0){
                tilesArray[i].innerText ="O"
            }

            else if(this.marks[i] === 1){
                tilesArray[i].innerText ="X"
            }
        }
    }

    this.getMarks = function(){
        return this.marks
    }
}

game = new Game

