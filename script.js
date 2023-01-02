console.log("Rock, Paper, Scissors")
var   playerScore = 0;
var computerScore = 0;
const playerName  = prompt("What's your name?");




const myArray = ["rock", "paper", "scissors"];

const rock = document.querySelector('#Rock');
const result = document.getElementById('result');
const plyerScore = document.getElementById('playerScore');
const cmputerScore = document.getElementById('computerScore');
const final =  document.getElementById('final');

plyerScore.textContent = playerName;
rock.addEventListener('click',
 () => {result.textContent = (playRound("rock", getComputerChoice()))
       
   } 
)

const paper = document.querySelector('#Paper');
paper.addEventListener('click',
 () => {result.textContent = (playRound("paper", getComputerChoice()))
       
   } 
)

const scissors = document.querySelector('#Scissors');
scissors.addEventListener('click',
 () => {result.textContent = (playRound("scissors", getComputerChoice()))
       
   } 
)

function playRound(playerSelection, computerSelection)      {

    console.log(playerSelection +  computerSelection);
  
    //var playerInput = prompt("rock, paper or scissors?");
    
    // var playerSelection = playerInput.toLowerCase();
   //var  computerSelection = getComputerChoice();    
    if (playerSelection === computerSelection)  {
        console.log("empate");
        checkScore(playerScore,  computerScore)
        return ("It's a tie");
      
    }
   

        else if (playerSelection === "rock" && computerSelection === "paper") {
            console.log("gana el papel");
            computerScore = computerScore + 1;
            checkScore(playerScore,  computerScore)
            cmputerScore.textContent = computerScore;
            
         return ("You lost." + computerSelection + "beats" + playerSelection);
         }
         
         else if (playerSelection === "rock" && computerSelection === "scissors"){
            console.log("ganan las tijeras");
            playerScore = playerScore + 1;
            checkScore(playerScore,  computerScore)
            plyerScore.textContent = playerName + playerScore;
            return ("You win, " + playerSelection + " beats " + computerSelection);
         }
  

         else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore = computerScore + 1;
            cmputerScore.textContent = computerScore;
            checkScore(playerScore,  computerScore)
            return ("You lost. " + computerSelection + " beats " + playerSelection);
        }

        else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore = playerScore + 1;
            plyerScore.textContent = playerName + playerScore;
            checkScore(playerScore,  computerScore)
            return ("You win," + playerSelection + " beats " + computerSelection);
      }

         else if(playerSelection === "scissors" && computerSelection === "rock") {
            computerScore = computerScore + 1;
            cmputerScore.textContent = computerScore;
            checkScore(playerScore,  computerScore)
            return ("You lost." + computerSelection + " beats " + playerSelection);
        }


        else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore = playerScore + 1;
            plyerScore.textContent = "PLAYER SCORE:" + "    "  + playerScore;
            cmputerScore.textContent = computerScore;
            checkScore(playerScore,  computerScore)
            return ("You win," + playerSelection + " beats " + computerSelection);
         }
  

         


    }


  
function checkScore(playerScore, computerScore)  {

   if (playerScore == 5) {

      console.log("YOU WIN!!!")
      final.textContent = "YOU WIN!!!";

     
      }
      
 else if  (computerScore == 5)  {

        final.textContent = "COMPUTER WINS!!";

   }

}





function    getComputerChoice()         {


            //Random number  i between 1 and 3

            //Assign number to answer
            computerSelection = myArray[Math.floor(Math.random() * (4-1) )];
           console.log(computerSelection);

        return computerSelection;

   


}
//function    Game()      {  for (let i=0; i < 5; i++)   {
//    console.log(playRound());

//}
    

 //   for (let i=0; i < 5; i++)   {
 //   console.log(playRound());

   // }




  //  }

//Game();       *