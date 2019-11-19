// GAME RULES
// - The game has two players, playing in rounds
// - In each turn, a player rolls a dice as many times as he wishes,
// each result added to his ROUND scores.
// - But, if the player rolls a 1, all his ROUND score gets localStorage. After that,
//  it's the next player's turn.
// - The player can choose to "HOLD", which means that his ROUND score gets added to 
// his GLOBAL score.
// After that, it's the next player's turn.
// - The first player to reach 100 points on GLOBAL score wins the game

var scores, roundScore, activePlayer, gamePlaying;
init();

document.querySelector(".btn-roll").addEventListener("click", function(){
    if(gamePlaying){
        // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    // 2. Display result
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    // 3. Update the round IF the rolled number WAS NOT a 1
    if(dice !==1){
        // Add score
        roundScore += dice;
        document.querySelector("#current-" + activePlayer).textContent =roundScore;
    }else{
        // Next player
        nextPlayer();

        // if(activePlayer === 0){
        //     activePlayer = 1;
        // }else{
        //     activePlayer = 0;
        // }
        }
    
    }
});


document.querySelector(".btn-hold").addEventListener("click", function(){
    if(gamePlaying){
// Add CURRENT score to GLOBAL score
scores[activePlayer] += roundScore;
// scores[activePlayer] = scores[activePlayer] + roundScore;

// Update the UI
document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

// check if player won the game
if(scores[activePlayer] >=100){
document.querySelector("#name-" + activePlayer).textContent = "Winner";
document.querySelector(".dice").style.display = "none";
document.querySelector(".player-" + activePlayer + "-panel").classList.add("Winner");
document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
gamePlaying = false;


}else{
// Next player
nextPlayer();
    }

}



});

function nextPlayer(){
    // Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // document.querySelector(".player-0-panel").classList.remove("active");
    // document.querySelector(".player-1-panel").classList.add("active");

    document.querySelector(".dice").style.display = "none";
}


document.querySelector(".btn-new").addEventListener("click", init);
// Reset player scores

function init(){
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector(".dice").style.display = "none";
 
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("name-0" ).textContent = "player 1";
    document.getElementById("name-1" ).textContent = "player 2";
    // document.querySelector("#name-" + activePlayer).textContent = "Winner";
    document.querySelector(".player-0-panel").classList.remove("Winner!");
    document.querySelector(".player-1-panel").classList.remove("Winner!");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");


}


// document.querySelector("#current-" + activePlayer).textContent = dice;
// // the textContent method only applies in content and not HTML
// // document.querySelector("current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";
// // when using the innerHTML property/method, it shoild be a string else javascript parser would think it's just some javascript code

// var x = document.querySelector("#score-0").textContent;
// console.log(x);
