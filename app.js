

function Game(){

}

// supposively player should haver marker attribute
function Player(){             
    this.markTile = function(){
        // marks here temporary
        marks = [0,1,0,1,0,1,0,1,0] 

        tiles = document.querySelectorAll(".tile")
        tilesArray = [].slice.call(tiles, 0)
        for(let i = 0; i < tilesArray.length; i++){
            tilesArray[i].addEventListener('click', function(){
                if(tilesArray[i].id === "one"){
                    marks[i] = 1
                    console.log(marks)
                }
            })
        }
        return marks
    }
}

function GameBoard(){

    this.updateGameBoard = function(){
        tiles = document.querySelectorAll(".tile")
        console.log(tiles)
        
        marks = [0,1,0,1,0,1,0,1,0]

        tilesArray = [].slice.call(tiles, 0)

        for(let i = 0; i < marks.length; i++){
            if(marks[i] === 0){
                tilesArray[i].innerText ="O"
            }

            else if(marks[i] === 1){
                tilesArray[i].innerText ="X"
            }
        }
        
    }
}

gameBoard = new GameBoard
player = new Player

player.markTile()

// gameBoard.updateGameBoard()



// tiles.forEach(function(tile){
//     tilesArray = [0,1,0,1,0,1,0,1,0]
//     for(let i = 0; i < tilesArray.length; i++){
//         if(tilesArray[i] === 0){
//             tile.innerText = "O"
//         }
//         else if(tilesArray[i] === 1){
//             tile.innerText[i] === "X"
//         }
//     }
// }) 