var userScoreResult=0;
var computerScoreResult=0;
var userScore = document.getElementById("user-score");
var computerScore = document.getElementById("computer-score");
var result=document.getElementById("result");

function computermove()
{
	var choices =['rock','paper','scissor'];
	var indx =Math.floor(Math.random()*3);
	return choices[indx];
}

function makeMoveRock()
{  
    var a=computermove();
    if(a=='rock'){
       result.innerHTML="GAME DRAW!";
    }else if(a=='paper'){
       result.innerHTML="PAPER COVERS ROCK,YOU LOSE!";
       computerScoreResult++;
       computerScore.innerHTML=computerScoreResult;

    }else{
       result.innerHTML="ROCK BREAKS SCISSOR,YOU WIN!";
       userScoreResult++;
       userScore.innerHTML=userScoreResult;
    } 
}
function makeMovePaper()
{   
    var b=computermove();
    if(b=='paper'){
        result.innerHTML="GAME DRAW!";
    }else if(b=='rock'){
        result.innerHTML="PAPER COVERS ROCK,YOU WIN!";
        userScoreResult++;
        userScore.innerHTML=userScoreResult;
    }else{
    	result.innerHTML="SCISSOR CUTS PAPER,YOU LOSE!";
    	computerScoreResult++;
    	computerScore.innerHTML=computerScoreResult;
    } 

}
function makeMoveScissor()
{   
	var c=computermove();
	if(c=='scissor'){
        result.innerHTML="GAME DRAW!";
    }else if(c=='paper'){
        result.innerHTML="SCISSOR CUTS PAPER,YOU WIN!";
        userScoreResult++;
        userScore.innerHTML=userScoreResult;
    }else{
    	result.innerHTML="ROCK BREAKS SCISSOR,YOU LOSE!";
    	computerScoreResult++;
    	computerScore.innerHTML=computerScoreResult;
    } 
}
