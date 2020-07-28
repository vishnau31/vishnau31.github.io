
var a;
var i;
var gameCounter=0;;
var x;
var mul;
var option = ['','','',''];
var score=0;
var mc;
function valueSet()
{
	a=0;
	document.getElementById("startreset").innerHTML="Start Game";
}
function next(){
      if(gameCounter<=150)
      {
      var no1= Math.round(Math.random()*10);
	  var no2= Math.round(Math.random()*10);
	  var ques=no1+"x"+no2;
	  mul=no1+no2;
	 
	  var randIndex = Math.round(Math.random()*3);
	  option[randIndex]=mul;
	  
	  for(i=0;i<=3;i++)
	  {
	  	if(i==randIndex)
	  		continue;
	  	option[i]=Math.round(Math.random()*100);

	  }
	  for(i=0;i<=3;i++)
	  {
	    var boxno="box"+(i+1);
	    document.getElementById(boxno).innerHTML=option[i];
	  }
      document.getElementById("question").innerHTML=ques;
       x=10;
	  clearInterval(mc);
	  var m=document.getElementById("trv");
	  mc=setInterval(
	  	function()
	  	{x--;m.innerHTML=x;if(x<=0){next();}},1000);
	  gameCounter++;
	 }
	 else{

	 	document.getElementById("gameOver").style.display="inline";
	 	document.getElementById("final").innerHTML=score;
        
	 }
	 
}
	function startGame()
{
	if(a==0)
	{ 
	  document.getElementById("startreset").innerHTML="Reset Game";
	  a=1;
	  document.getElementById("timeremaining").style.display="inline";
	  next();
	}
	else
	{
	  location.reload();
	}
}
function check(a)
{
 if(option[a]==mul)
   {
 	document.getElementById("scorevalue").innerHTML=(++score);
 	document.getElementById("correct").style.display="inline"
    var cor=setTimeout(function(){document.getElementById("correct").style.display="none"},0);
    next();
   }
  else
  {
  	document.getElementById("wrong").style.display="inline"
    var wro=setTimeout(function(){document.getElementById("wrong").style.display="none"},0);
  	document.getElementById("wrong").style.display="inline";
  	
  	next();
    
  }
}
