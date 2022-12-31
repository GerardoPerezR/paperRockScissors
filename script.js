console.log("Rock, Paper, Scissors")




const myArray = ["rock", "paper", "scissors"];

const rock = document.querySelector('#Rock');
const result = document.getElementById('result');
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
         return ("You lost, Bobby. You're a loser, Bobby." + computerSelection + "beats" + playerSelection);
         }
         
         else if (playerSelection === "rock" && computerSelection === "scissors"){
            console.log("ganan las tijeras");
            return ("You win, " + playerSelection + " beats " + computerSelection);
         }
  

         else if (playerSelection === "paper" && computerSelection === "scissors") {
            return ("You lost, Bobby. You're a loser, Bobby. " + computerSelection + " beats " + playerSelection);
        }

        else if (playerSelection === "paper" && computerSelection === "rock") {
            return ("You win," + playerSelection + " beats " + computerSelection);
      }

         else if(playerSelection === "scissors" && computerSelection === "rock") {
            return ("You lost, Bobby. You're a loser, Bobby." + computerSelection + " beats " + playerSelection);
        }


        else if (playerSelection === "scissors" && computerSelection === "paper") {
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