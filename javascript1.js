var playing=false;
var score;
var action;
var timeremaining;
var correctAnswer;



document.getElementById("startreset").onclick=function(){
	if(playing==true)
	{
       location.reload();
	}
	else
	{
	   playing=true;
       score=0;
       document.getElementById("scorevalue").innerHTML=score;
       show("timeremaining");
       timeremaining=10;
       document.getElementById("timeremainingvalue").innerHTML=timeremaining;
       hide("gameover");

       document.getElementById("startreset").innerHTML="Reset Game";

       
       startCountdown();


       //generate new question and multiple ans

       generateQA();
       
    }
}


//clicking answer box
for(i=1;i<5;i++)
{
document.getElementById("box"+i).onclick=function(){
//check if we are playing
if(playing==true)
{
	if(this.innerHTML==correctAnswer)
	{
      //correct answer
      score++;
      document.getElementById("scorevalue").innerHTML=score;
      //hide wrong box and show correct box
      hide("wrong");
      show("correct");
      setTimeout(function(){
      hide("correct");

      },1000);
      generateQA();
      
	}

    else
    {
	hide("correct");
	show("wrong");
	setTimeout(function(){
		hide("wrong");
		},1000);
	}
}
}
}

//functions


//startcounter
function startCountdown(){
	action=setInterval(function(){
    timeremaining-=1; 
    document.getElementById("timeremainingvalue").innerHTML=timeremaining; 
	if(timeremaining==0)
	{
		//game over
		stopCountdown();
		show("gameover");
		document.getElementById("gameover").innerHTML="<p>Game Over</p><p>your score is "+score+".</p>";
		hide("timeremaining");
		hide("correct");
		hide("wrong");
		playing=false;
		document.getElementById("startreset").innerHTML="Start Game";
		  
	}
	},1000);
}


//stopcounter
function stopCountdown()
{
	clearInterval(action);//stopcounter if game is over
}



//show
function show(Id)
{
	document.getElementById(Id).style.display="block";
}


//hide an element
function hide(Id)
{
	document.getElementById(Id).style.display="none";
}



//generate q n a

function generateQA(){
	var x=1+Math.round(10* Math.random());
	var y=1+Math.round(10* Math.random());
	correctAnswer=x+y;
    document.getElementById("question").innerHTML=x+"+"+y;
    var correctPosition=1+Math.round(3* Math.random());
    //correct option box
    document.getElementById("box"+correctPosition).innerHTML=correctAnswer;
    //wrong answer boxes

  var answers=[correctAnswer];  


for(i=1;i<5;i++){
	if(i!=correctPosition)
	{
		var wrongAnswer;
		do
		{
			wrongAnswer=(1+Math.round(10* Math.random()))*(1+Math.round(10* Math.random()));
		}
		while(answers.indexOf(wrongAnswer)>-1);
		

      document.getElementById("box"+i).innerHTML=wrongAnswer;
      answers.push(wrongAnswer);


    }
}

}





