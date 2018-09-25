var newGame = document.getElementById('New-Game');
var winnerText = document.getElementById('winner-Text');
var userText = document.getElementById('userText');
var compText = document.getElementById('compText');
var yourWins = document.getElementById('your-Wins');
var enemyWins = document.getElementById('enemy-Wins');
var round = document.getElementById('rounds');
var userSelection = document.getElementsByClassName('button');
var currentRound = 0
var rounds = 0;
var counter = 0;

var choices = {
  paper: "PAPER",
  rock: 'ROCK',
  scissors: "SCISSORS"
};

var choicesArr = [choices.paper, choices.rock, choices.scissors];

var params = 
  {
    playerName: [],
    playerWinThisRound: 0,
    enemyWinThisRound: 0,   
  };

function isDisabledButtons (element) {
  for (let i = 0; i < userSelection.length; i++) {
    userSelection[i].disabled = element;
  }
}

isDisabledButtons(true);

newGame.addEventListener('click', function(){
  params.playerName = window.prompt('podaj imię');
  rounds = parseInt(window.prompt('podaj ilość rund'));
  counter = rounds;
  currentRound = 0;
  params.playerWinThisRound = 0;
  params.enemyWinThisRound = 0;
  yourWins.innerHTML = 'Twoje wygrane ' + params.playerWinThisRound;
  enemyWins.innerHTML = 'Wygrane przeciwnika ' + params.enemyWinThisRound;
  
  isDisabledButtons(false);
})

for(let i = 0; i < userSelection.length; i++) {
  userSelection[i].addEventListener("click", function() {
    counter -= 1;
    round.innerHTML = 'Pozostało rund ' + counter;    
    var computerChoice = getComputerChoice();    
    var userChoice = getUserChoice(i);       
  
    if ( computerChoice === userChoice) {
      winnerText.innerHTML = 'w tej rundzie mamy remis';
    }
    
    else if (
      userChoice === choices.paper && computerChoice === choices.rock || 
      userChoice === choices.rock && computerChoice === choices.scissors || 
      userChoice === choices.scissors && computerChoice === choices.paper
    ) {
      winnerText.innerHTML = 'w tej rundzie wygrał ' + params.playerName;
      params.playerWinThisRound += 1;     
      yourWins.innerHTML = 'Twoje wygrane ' + params.playerWinThisRound;
    }
    
    else {
      winnerText.innerHTML = 'w tej rundzie Komputer Wygrał';     
      params.enemyWinThisRound += 1;        
      enemyWins.innerHTML = 'Wygrane przeciwnika ' + params.enemyWinThisRound;
    }      
    
    choseElementByUser(userChoice);
    choseElementByComp(computerChoice);
    
    currentRound += 1;      

    checkGameEnd();    
  })
}

function choseElementByUser(userChoice) {
  var user = '';
  
  if (userChoice === choices.paper){
    user = 'Papier';               
  }
  else if (userChoice === choices.rock) {       
    user = 'Kamień';
  }
  else {
    user = 'Nożyce';        
  } 
  userText.innerHTML = 'Wybrałeś ' + user; 
}

function choseElementByComp(computerChoice) {
  if (computerChoice === choices.paper){        
    comp = 'Papier';        
  }
  else if (computerChoice === choices.rock) {        
    comp = 'Kamień';
  }
  else {       
    comp = 'Nożyce'; 
  }
  compText.innerHTML = 'Komputer wybrał ' +comp;
}

function checkGameEnd() {
  console.log('rounds', rounds, 'currentRound', currentRound);  
  if (rounds === currentRound) {
    isDisabledButtons(true);
    if (params.playerWinThisRound < params.enemyWinThisRound){                  
      alert("Game Over Sucker");
    }
    else if (params.playerWinThisRound > params.enemyWinThisRound) {                  
      alert("Gratulacje Wygrałeś " + params.playerName);      
    }    
  }      
}

checkGameEnd();

function getComputerChoice() {
    return choicesArr[Math.floor((Math.random() * 3))];
}

function getUserChoice(index) {
    return choicesArr[index];
}