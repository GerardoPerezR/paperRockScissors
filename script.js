console.log("Rock, Paper, Scissors")




const myArray = ["rock", "paper", "scissors"];




function playRound()      {

    var playerSelection = prompt("rock, paper or scissors?");
    var  computerSelection = getComputerChoice();    
    if (playerSelection === computerSelection)  {
        console.log("It's a tie")
    }
   
   

     else if (playerSelection === computerSelection) {
         console.log("it's a tie");}
      

     else if (playerSelection === "rock" && computerSelection === "paper") {
         console.log("You lost, Bobby. You're a loser, Bobby." + computerSelection + "beats" + playerSelection);
         }
         
         else if (playerSelection === "rock" && computerSelection === "scissors"){
            console.log("You win," + playerSelection + "beats" + computerSelection);
         }
  

         else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lost, Bobby. You're a loser, Bobby." + computerSelection + "beats" + playerSelection);
        }

        else if (playerSelection === "paper" && computerSelection === "rock") {
         console.log("You win," + playerSelection + "beats" + computerSelection);
      }

         else if(playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lost, Bobby. You're a loser, Bobby." + computerSelection + "beats" + playerSelection);
        }


        else if (playerSelection === "scissors" && computerSelection === "paper") {
            console.log("You win," + playerSelection + "beats" + computerSelection);
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
    
    playRound();

    }

Game();