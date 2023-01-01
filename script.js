console.log("Rock, Paper, Scissors")
var   playerScore = 0;
var computerScore = 0;




const myArray = ["rock", "paper", "scissors"];

const rock = document.querySelector('#Rock');
const result = document.getElementById('result');
const plyerScore = document.getElementById('playerScore');
const cmputerScore = document.getElementById('computerScore');

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
        return ("It's a tie");
      
    }
   

        else if (playerSelection === "rock" && computerSelection === "paper") {
            console.log("gana el papel");
            computerScore = computerScore + 1;
            cmputerScore.textContent = computerScore;
            
         return ("You lost." + computerSelection + "beats" + playerSelection);
         }
         
         else if (playerSelection === "rock" && computerSelection === "scissors"){
            console.log("ganan las tijeras");
            playerScore = playerScore + 1;
            plyerScore.textContent = playerScore;
            return ("You win, " + playerSelection + " beats " + computerSelection);
         }
  

         else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore = computerScore + 1;
            cmputerScore.textContent = computerScore;
            return ("You lost. " + computerSelection + " beats " + playerSelection);
        }

        else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore = playerScore + 1;
            plyerScore.textContent = playerScore;
            return ("You win," + playerSelection + " beats " + computerSelection);
      }

         else if(playerSelection === "scissors" && computerSelection === "rock") {
            computerScore = computerScore + 1;
            cmputerScore.textContent = computerScore;
            return ("You lost." + computerSelection + " beats " + playerSelection);
        }


        else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore = playerScore + 1;
            plyerScore.textContent = playerScore;
            cmputerScore.textContent = computerScore;
            return ("You win," + playerSelection + " beats " + computerSelection);
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