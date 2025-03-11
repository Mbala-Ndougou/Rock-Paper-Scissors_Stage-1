function playGame() {
    let playerScore = 0
let computerScore = 0


// COMPUTER CHOICE


let computerChoice = ""

function getComputerChoice() {
    let a = Math.floor(Math.random() * 3) + 1
    if(a == 1) {
        computerChoice = "Rock"
        return computerChoice 
    }
    else if(a == 2) {
        computerChoice = "Paper"
        return computerChoice 
    }
    else {
        computerChoice = "Scissors"
        return computerChoice 
    }
}

// getComputerChoice();


// PLAYER CHOICE

let playerChoice = ""

function getPlayerChoice(){
    playerChoice = prompt("Choose: Rock/Paper/Scissors")
    return playerChoice
}

// getPlayerChoice()


// PLAYROUND (function that plays one round)

function playRound(){
    let playerChoice = getPlayerChoice().toLowerCase()
    let computerChoice = getComputerChoice().toLowerCase()

    switch (playerChoice) {

        case computerChoice:
            console.log("Player:"+playerChoice+ "PC:"+computerChoice+" Draw !");  
            let score = "Player"+playerScore+" PC"+computerScore
            console.log(score);          
            return`Player:${playerScore} Computer:${computerScore}`;            


        case "rock":
            if(computerChoice == "paper"){
                computerScore++
                console.log(" PC won !");          
            }
            else if(computerChoice == "scissors"){
                playerScore++
                console.log("Player won!");           
            }
            break;


        case "paper":
            if(computerChoice == "rock"){
                playerScore++
                console.log("Player won!");           
            }
            else if(computerChoice == "scissors"){
                computerScore++
                console.log("PC won !");           
            }
            break;


        case "scissors":
            if(computerChoice == "rock"){
                computerScore++
                console.log("PC won !");           
            }
            else if(computerChoice == "paper"){
                playerScore++
                console.log("Player won!");           
            }
            break;
            

        default:
            console.log("Invalid input !");
            break;
    }

    let score = "Player: "+playerScore+" PC: "+computerScore
    console.log(score); 
             
    
}

// LOOPING 5 TIMES

for (let i = 0; i < 5; i++) {
    playRound()
    
}

// END OF THE GAME

}


playGame()