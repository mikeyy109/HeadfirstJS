var loc1 = 3;
var loc2 = 4;
var loc3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while(!isSunk){
	guess = prompt("Enter a number between 0-6");
	guesses++;
	
	if(guess >= 0 && guess <= 6){
		if(guess == loc1 || guess == loc2 || guess == loc3){
		hits++;
		alert("Thats a hit!");
		} else {
		alert("Sorry.. Miss");
		}
	}else{
		alert("Not vaild number");
	}
	
	if(hits == 3){alert("You Win!"); isSunk = true;}
}