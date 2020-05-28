function myFunction() {
  alert("The game has 2 players. In each turn, a player rolls a dice as many times as he wants. Each result is added to his ROUND score. BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn. The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn. The first player that reaches 100 points on GLOBAL score wins the game");
}

var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function(){
    
    //1.Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    //2.Display the result
    var diceDom = document.querySelector('.dice');
    diceDom.src = 'dice-' + dice +'.png';
    
    //3.Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
        //add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
    }
    
});

