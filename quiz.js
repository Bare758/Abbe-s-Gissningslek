var question = [["What is batman real name?", "bruce wayne"],["2 + 2 - 11 ", "-7"],["who is the first Doubble champ in ufc?", "amanda nunes"]]; 
var points = 0;
var counter = 1;
function start() {
	switch (counter) {
		case 1: {
			document.getElementById("questions").innerHTML = ("Question 1: " + question[0][0]);
			break;
		}
		case 2: {
			document.getElementById("questions").innerHTML = ("Question 2: " + question[1][0]);
			break;
		}
		case 3: {
			document.getElementById("questions").innerHTML = ("Question 3: " + question[2][0]);
			break;
			
		}
		default: {
			document.getElementById("questions").innerHTML = ("you're finished");
			
			
		}

	}
}

function submit() {

	switch (counter) {
		case 1: {

			if (document.getElementById("answerBox").value == question[0][1]) {
					points++;
					counter++;
					document.getElementById("score").innerHTML = ("points: " + points);
					start();
					break;

			}
			else {


					counter++;
					document.getElementById("score").innerHTML = ("points: " + points);
					start();
					break;

			}
		}
		case 2: {

			if (document.getElementById("answerBox").value == question[1][1]) {
					points++;
					counter++;
					document.getElementById("score").innerHTML = ("points: " + points);
					start();
					break;

			}
			else {


					counter++;
					document.getElementById("score").innerHTML = ("points: " + points);
					start();
					break;

			}

		}
		case 3: {
			if (document.getElementById("answerBox").value == question[2][1]) {
					points++;
					counter++;
					document.getElementById("score").innerHTML = ("You got " + points + " points out of 3");
					start();
					break;

			}
			else {


					counter++;
					document.getElementById("score").innerHTML = ("You got " + points + " points out of 3");
					start();
					break;

			}

			
		}


	}
}

