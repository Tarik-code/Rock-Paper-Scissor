


//Computer random 
const computerPlay = () => {
    const randomNumber = Math.floor(Math.random() *3);
    switch (randomNumber) {
        case 0:
        return 'paper';
        break;
        case 1:
        return 'rock';
        break;
        case 2:
        return 'scissors';
        break;
        default:
            break;
    }
};




let computerScore = parseInt(0);
let playerScore = parseInt(0);

const playRound = (playerSelection, computerSelection) => {
    //User selection of Paper
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore +=1;
            return alert("You won the round!");}
        else if (computerSelection === 'scissors') {
            computerScore +=1;
            return alert(`Computer won the round! Computer picked ${computerSelection}`);}
    }; 
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore +=1;
            return alert(`Computer won the round! Computer picked ${computerSelection}`);}
        else if (computerSelection === 'paper') {
            playerScore +=1;
            return alert("You won the round!");} 
    };
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore +=1;
            return alert(`Computer won the round! Computer picked ${computerSelection}`);}
        else if (computerSelection === 'scissors') {
            playerScore +=1;
            return alert("You won the round!");} 
    };
    if (playerSelection === computerSelection) {
        return alert(`its a tie! Computer picked ${computerSelection}`)};
};

for (computerScore = 0; computerScore<=5;){
    if (computerScore === 5 || playerScore === 5) {
        alert('Game has ended')
        break;
    } else {
        let playerSelection = prompt('Please enter rock, paper or scissors!').toLowerCase();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection)
        alert(`Your score is ${playerScore}, The computer score is  ${computerScore}`);
  };
    };
     
 
    var i=0;i<5;i++

console.log(computerScore);
console.log(playerScore);
