class Game{
    constructor(player){
        this.player = player
    }

    verticalMove(){

    }
    horizontalMove(){

    }
    diagonalMove(){

    }
    determineWinner(){

    }
   }

class PlayerX extends Game{
    constructor(){
        super('X') 
        this.markX = 'X'
    }

    setMarkX(cell){
       cell.textContent= this.markX
}

    countX(){}
}

class PlayerO extends Game{
    constructor(){
        super('O')
        this.markY = 'O'
    }
    setMarkY(cell){
      cell.textContent= this.markY
 }
    countY(){}
}

let newGame = new Game()
let playerX = new PlayerX()
let playerY = new PlayerO()
//start with PlayerX as the current player
let currentPlayer = playerX

//select all the cells to make it into an array of cells
const cells = document.querySelectorAll('.cell')

//click any cell in the array
for(let cell of cells){   
 cell.addEventListener('click', (e) => {
    if(e.target.textContent === ' '){
        //check which player's turn it is and set the mark accordingly
       if(currentPlayer instanceof PlayerX) {
        currentPlayer.setMarkX(e.target)
        //switch to PlayerO
        currentPlayer = new PlayerO()
       } else if (currentPlayer instanceof PlayerO){
        currentPlayer.setMarkO(e.target)
        //switch back to PlayerX
        currentPlayer = new playerX()
        }
    }
    })

} 