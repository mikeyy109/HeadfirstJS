var randomLoc = Math.floor(Math.random() * 5);

var loc1 = randomLoc;
var loc2 = loc1+1;
var loc3 = loc2+1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while(!isSunk){
	guess = prompt("Ready aim fire! (Enter a number between 0-6)");
	

	if(guess < 0 || guess > 6){
		alert("Not vaild number");
	}else{
		guesses++;
		if(guess == loc1 || guess == loc2 || guess == loc3){
			hits++;
			alert("Thats a hit!");
		} else {
			alert("Sorry.. Miss");
		}
	}
	
	if(hits == 3){alert("You Win!"); isSunk = true;}
}

var stats = "You took " + guesses + " guesses to sink the battleship, " +
			"which means your shooting accuracy was " + (3/guesses);
alert(stats);