function playGame() {
    let playerScore = 0
    let computerScore = 0


    // CREATING NEW BUTTONS

    const rock = document.createElement("button")
    rock.textContent = "Rock"
    document.body.appendChild(rock)
    const paper = document.createElement("button")
    paper.textContent = "Paper"
    document.body.appendChild(paper)
    const scissors = document.createElement("button")
    scissors.textContent = "Scissors"
    document.body.appendChild(scissors)

    const buttons = document.querySelectorAll("button")
    let playerChoice;
    for(const btn of buttons){
        btn.addEventListener('click', ()=>{
            playerChoice = btn.textContent
            playRound(playerChoice);
        })
    }




    // SCORES divs

    let score = "Player"+playerScore+" PC"+computerScore
    const div1 = document.createElement("div")

    div1.textContent = score;
    document.body.appendChild(div1)

    const div2 = document.createElement("div")
    document.body.appendChild(div2)
    
    const div3 = document.createElement("div")
    document.body.appendChild(div3)

   
    

// GET COMPUTER CHOICE

    let computerChoice = ""

    function getComputerChoice() {
        let hazard = Math.floor(Math.random() * 3) + 1
        if(hazard == 1) {
            computerChoice = "Rock"
            return computerChoice 
        }
        else if(hazard == 2) {
            computerChoice = "Paper"
            return computerChoice 
        }
        else {
            computerChoice = "Scissors"
            return computerChoice 
        }
    }




    //PLAYROUND FUNCTION 

    function playRound(playerChoice){
        // let playerChoice = getPlayerChoice().toLowerCase()
        playerChoice = playerChoice.toLowerCase()
        let computerChoice = getComputerChoice().toLowerCase()

        switch (playerChoice) {

            case computerChoice:
                console.log("Player:"+playerChoice+ "PC:"+computerChoice+" Draw !");  
                // console.log(score);          
                // return`Player:${playerScore} Computer:${computerScore}`;            


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

        
        div2.textContent = `Player:${playerScore} Computer:${computerScore}`
        if(playerScore === 5){
            div3.textContent = "Player won!"
            return
        }
        else if(computerScore === 5){
            div3.textContent = "CPU won"
            return
        }
        
        
    }

    // LOOPING 5 TIMES

    // for (let i = 0; i < 5; i++) {
    //     playRound()
        
    // }

// END OF THE GAME

}


playGame()