
//Global variable for score.
var amountCorrect = 0;


// Waits for the start button to be pressed.
    document.getElementById("startBtn").addEventListener("click", startGame);
//When the start button is pressed, the div containing the questions appears in one second and the timer starts countdown.
    function startGame() {
        setTimeout(function () { document.getElementById("questions").className="show"; }, 1000);
//Creates variable for how many seconds to start out with.
        var timeleft = 20;
        var timer = setInterval(function () {
            document.getElementById("timer").innerHTML = "Time: " + timeleft + " seconds remaining";
//Decrements time by one.
            timeleft -= 1;
//When times gets down to zero, it stops and says "Finished!"
            if (timeleft <= 0) {
                clearInterval(timer);
                document.getElementById("timer").innerHTML = "Finished!";
                //End game function is called.
                endGame();
            };
        }, 1000);

    };

//Listens for a click on the submit button.
    document.getElementById("submit").addEventListener("click", endGame);

//The end Game function.
    function endGame() {
        //Hides the questions after the user presses Enter.
        setTimeout(function () { document.getElementById("questions").className = "hide"; }, 1000);
        //Shows the score.
        setTimeout(function () { document.getElementById("score").className="show"; }, 1000);
        document.getElementById("score").innerText = "Game Over! You got " + amountCorrect + "/5 correct!";
    };

function handleClick() {
    //Loops through all the radio groups.
    for (var i = 1; i <= 45; i++) {
        var radios = document.getElementsByName("group" + i);
        for (var j = 0; j < radios.length; j++) {
            var radio = radios[j];
            //If correct radio button was selected, adds to the score counter.
            if (radio.value === "correct" && radio.checked) {
                amountCorrect++;
            }
        }
    }
};