console.log("Rock, Paper, Scissors")




const myArray = ["rock", "paper", "scissors"];




function playRound()      {

    var playerInput = prompt("rock, paper or scissors?");
    var playerSelection = playerInput.toLowerCase();
    var  computerSelection = getComputerChoice();    
    if (playerSelection === computerSelection)  {
        return ("It's a tie")
    }
   
   

     else if (playerSelection === computerSelection) {
        return ("it's a tie");}
      

     else if (playerSelection === "rock" && computerSelection === "paper") {
         return ("You lost, Bobby. You're a loser, Bobby." + computerSelection + "beats" + playerSelection);
         }
         
         else if (playerSelection === "rock" && computerSelection === "scissors"){
            return ("You win," + playerSelection + "beats" + computerSelection);
         }
  

         else if (playerSelection === "paper" && computerSelection === "scissors") {
            return ("You lost, Bobby. You're a loser, Bobby." + computerSelection + "beats" + playerSelection);
        }

        else if (playerSelection === "paper" && computerSelection === "rock") {
            return ("You win," + playerSelection + "beats" + computerSelection);
      }

         else if(playerSelection === "scissors" && computerSelection === "rock") {
            return ("You lost, Bobby. You're a loser, Bobby." + computerSelection + "beats" + playerSelection);
        }


        else if (playerSelection === "scissors" && computerSelection === "paper") {
            return ("You win," + playerSelection + "beats" + computerSelection);
         }
  

         
   

    }







    


          




function    getComputerChoice()         {


            //Random number  i between 1 and 3

            //Assign number to answer
            computerSelection = myArray[Math.floor(Math.random() * (4-1) )];
           console.log(computerSelection);

        return computerSelection;

   


}
function    Game()      {
    

    for (let i=0; i < 5; i++)   {
    console.log(playRound());

    }




    }

Game();