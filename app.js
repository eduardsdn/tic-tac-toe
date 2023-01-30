// for marks 0 = "O" 1 = "X" 2 = Blank tile

function Game(){
    this.isOver = false
    this.turn = 0

    this.createPlayers = function(){
        players = []
        const player1 = new Player("X")
        const player2 = new Player("O")
        players.push(player1, player2)
    }

    this.createGameBoard = function(){
        gameBoard = new GameBoard()
    }

    this.createPlayers()
    this.createGameBoard()

    
    
    this.playGame = function(){
        if(this.turn % 2 === 0){
            players[0].markTile(gameBoard.getMarks())
        }
        else if (this.turn % 2 !== 0){
            players[1].markTile(gameBoard.getMarks())
        }
        
    } 
}


function Player(marker){
    
    this.marker = marker

    this.markTile = function(){

        marks = gameBoard.marks
    
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
                    game.turn ++
                    game.playGame()
                }
                else if(tilesArray[i].id === "two"){
                    marks[1] = marker
                    gameBoard.updateGameBoard()
                    game.turn ++
                    game.playGame()
                }
                else if(tilesArray[i].id === "three"){
                    marks[2] = marker
                    gameBoard.updateGameBoard()
                    game.turn ++
                    game.playGame()
                }
                else if(tilesArray[i].id === "four"){
                    marks[3] = marker
                    gameBoard.updateGameBoard()
                    game.turn ++
                    game.playGame()
                }
                else if(tilesArray[i].id === "five"){
                    marks[4] = marker
                    gameBoard.updateGameBoard()
                    game.turn ++
                    game.playGame()
                }
                else if(tilesArray[i].id === "six"){
                    marks[5] = marker
                    gameBoard.updateGameBoard()
                    game.turn ++
                    game.playGame()
                }
                else if(tilesArray[i].id === "seven"){
                    marks[6] = marker
                    gameBoard.updateGameBoard()
                    game.turn ++
                    game.playGame()
                }
                else if(tilesArray[i].id === "eight"){
                    marks[7] = marker
                    gameBoard.updateGameBoard()
                    game.turn ++
                    game.playGame()
                }
                else if(tilesArray[i].id === "nine"){
                    marks[8] = marker
                    gameBoard.updateGameBoard()
                    game.turn ++
                    game.playGame()
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

    this.getTurn = function(){
        return this.turn
    }
}


const game = new Game()
// gameBoard = new GameBoard()
// player1 = new Player("X")
// player2 = new Player("O")
game.playGame()

// player1.markTile()

//checker needs to work every iteration








