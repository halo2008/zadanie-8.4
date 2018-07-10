var output = document.getElementById('output');
var output_2 = document.getElementById('output-2');
var output_3 = document.getElementById('output-3');
var yourWins = document.getElementById('your-Wins');
var enemyWins = document.getElementById('enemy-Wins');
var win = 0;
var enemy = 0;

var userSelection = document.getElementsByClassName('button');

for(let i = 0; i < userSelection.length; i++) {
  userSelection[i].addEventListener("click", function() {
    var computer = Math.floor((Math.random() * 3) + 1);    
    user = i;    
    comp = computer;
    var count = parseInt(count);    
    
    function counterWins() {
      if (output.innerHTML === 'Wygrałeś') {
        win+=1;        
        yourWins.innerHTML = 'Twoje wygrane ' +win;
      }
      
      else if (output.innerHTML === 'Komputer Wygrał') {
        enemy+=1;       
        enemyWins.innerHTML = 'Wygrane przeciwnika ' + enemy;
      }
      
    }
       
  
    if (computer === 1 && i === 0 || computer === 2 && i === 1 || computer === 3 && i === 2) {
      output.innerHTML = 'remis';
      choseElementByUser();
      choseElementByComp();
    }
    
    else if (i === 0 && computer === 2 || i === 1 && computer === 3 || i === 2 && computer === 1) {
      output.innerHTML = 'Wygrałeś';      
      choseElementByUser();
      choseElementByComp();
    }
    
    else {
      output.innerHTML = 'Komputer Wygrał';      
      choseElementByUser();
      choseElementByComp();
    }
    
    counterWins();  
    
    function choseElementByUser() {
      if (i === 0){
        user = 'Papier';        
        output_2.innerHTML = 'Wybrałeś ' +user;       
      }
      else if ( i === 1) {       
        user = 'Kamień';
        output_2.innerHTML = 'Wybrałeś ' +user;
      }
      else {
        user = 'Nożyce';        
        output_2.innerHTML = 'Wybrałeś ' +user;
      }      
    }
    
    function choseElementByComp() {
      if (comp === 1){        
        comp = 'Papier';        
        output_3.innerHTML = 'Komputer wybrał ' +comp;
      }
      else if (comp === 2) {        
        comp = 'Kamień';        
        output_3.innerHTML = 'Komputer wybrał ' +comp;

      }
      else {       
        comp = 'Nożyce';       
        output_3.innerHTML = 'Komputer wybrał ' +comp;

      }
    }
  
  })
}
