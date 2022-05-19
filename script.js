//Variables / RESET
let computerSelection;
let playerSelection;
let computerScore = parseInt(0);
let playerScore = parseInt(0);

//DOM Variables 
const score = document.getElementById("liveScore")
const test = document.getElementById('test')
const results = document.getElementById('results')
const playerImg = document.getElementById('playerImg');
const floatThisHm = document.getElementById('floatThisHm')
const floatThisPc = document.getElementById('floatThisPc')

//Computer Player - Random Selector
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

//Variables
computerSelection = computerPlay();

//Event Listener  /Rock
const rock = document.getElementById('rock');
rock.addEventListener('click', function() {
    computerSelection = computerPlay()
    playerSelection = 'rock'
    console.log(playerSelection)
    console.log(computerSelection)
    playRound(playerSelection, computerSelection);
    update()
    floatThisHm1()
    })
//Event Listener  /Paper
    let paper = document.getElementById('paper');
    paper.addEventListener('click', function() {
    computerSelection = computerPlay()
    playerSelection = 'paper'
    playRound(playerSelection, computerSelection);
    update()
    })
//Event Listener  /Scissors
    let scissors = document.getElementById('scissors');
    scissors.addEventListener('click', function() {
    computerSelection = computerPlay()
    playerSelection = 'scissors'
    update()
    playRound(playerSelection, computerSelection);
    })

//Update Score + results
function update(){
    score.textContent = `| ${playerScore} : ${computerScore} |`
    floatThisHm.style.visibility = 'visible'
    floatThisPc.style.visibility = 'visible'

    if (playerSelection === 'rock') {
        playerImg.src = "imgs/rock.jpg"
    } else if (playerSelection === 'paper') {
        playerImg.src = "imgs/paper.jpg"
    } else if (playerSelection === 'scissors') {
        playerImg.src = 'imgs/scissor.jpg'
    } if (computerSelection === 'rock') {
        computerImg.src = "imgs/rock.jpg"
    } else if (computerSelection === 'paper') {
        computerImg.src = "imgs/paper.jpg"
    } else if (computerSelection === 'scissors') {
        computerImg.src = 'imgs/scissor.jpg'
    }
}

//Round play
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore +=1; 
            results.innerText = `You won the round!\n Paper beats ${computerSelection}`
            checkWinner()}
        else if (computerSelection === 'scissors') {
            computerScore +=1;
            results.innerText = `Computer won the round!\n Scissors beats ${playerSelection}`
            checkWinner();}
    }; 
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore +=1;
            results.innerText = `Computer won the round!\n Rock beats ${playerSelection}`
            checkWinner();}
        else if (computerSelection === 'paper') {
            playerScore +=1;
            results.innerText = `You won the round!\n Scissors beats ${computerSelection}`
            checkWinner()} 
    };
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore +=1;
            results.innerText = `Computer won the round!\nPaper beats ${playerSelection}`
            checkWinner() }
        else if (computerSelection === 'scissors') {
            playerScore +=1;
            results.innerText = `You won the round!\nRock beats ${computerSelection}`;
            checkWinner()}
    };
    if (playerSelection === computerSelection) {
        results.innerText = `its a tie!\nYou both picked ${computerSelection}` 
        results.style.textAlign = 'center'};
        checkWinner()
};

// Winner check + declare
function checkWinner(){
    if (playerScore < 5 && computerScore < 5){
        results.style.textAlign = 'center'
    if (playerScore === 1 || computerScore === 1) {
        results.style.color = '#1C3144'
    }
    }else{
        declareWinner();
        playerScore = 0;
        computerScore = 0;
        //results.style.color = '#1C3144'

    }  
}
function declareWinner(){
    if (playerScore===5){
        results.style.textAlign = 'center'
        results.innerText = "You won the game!!!\nPlay another?";
        results.style.color = '#8ed081'

    } else if (computerScore===5){
        results.style.textAlign = 'center'
        results.innerText = "Sorry, it seems that you lost the game...\nPlay another?";
        results.style.color = '#fb6376'
    }
}


