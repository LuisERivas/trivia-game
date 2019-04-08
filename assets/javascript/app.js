//Global score Variable
//set initial value of amount correct to 0
var amountCorrect = 0;

//declare Start game function
function startGame(){
    //start time out function and set questions to be changed from invisble to be seen
    setTimeout(function(){ document.getElementById("questions").className="show"},500);
    //sets starting value of countdown
    var timeleft = 20;
    var timer = setInterval(function(){
        document.getElementById("timer").innerHTML = "Time:" + timeleft + "seconds remaining";
        timeleft--;
        if(timeleft<=0){
            clearInterval(timeleft);
            document.getElementById("timer").innerHTML = "finished bruv!";
            endGame();
        };
    },1000);
};
//end game function
function endGame(){
    setTimeout(function(){document.getElementById("questions").className= "hide";}, 500);

    setTimeout(function(){document.getElementById("score").className = "show";},500);
    document.getElementById("score").innerText= "Game over... You got" + amountCorrect + "/5 correct"; 
};
//Check answers function
function checkAnswers(){
    for(var i=1; i<=5;i++){
        var radios=document.getElementsByName("group"+i);
        for(var j=0; j< radios.length; j++){
            var radio = radios[j];
            if(radio.value=== "correct" && radio.checked){
                amountCorrect++;
            }
        }
    }
    Console.log(amountCorrect);
};
//call start game function
//when startBtn is clicked, run startGame Function 
document.getElementById("startBtn").addEventListener("click",startGame);
//call end game function
//when submit is clicked, run endgame function
document.getElementById("submit").addEventListener("click",endGame);