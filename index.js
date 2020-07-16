
var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;

var randamdiceImage="images/"+"dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randamdiceImage);


var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;

var randamdiceImage2="images/"+"dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randamdiceImage2);

if (randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="😁 Player 1 wins!";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="😁 Player 2 won!";
}
else{
  document.querySelector("h1").innerHTML="😂 Draw!";
}
