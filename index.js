var randomNumber=Math.random();
randomNumber=Math.floor(randomNumber*6)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber+".png");

var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber1+".png");

if(randomNumber>randomNumber1){
    document.querySelector("h1").innerHTML="🏆Player1 wins";
}
else if(randomNumber1>randomNumber){
    document.querySelector("h1").innerHTML="Player2 wins🏆";
}
else if(randomNumber===randomNumber1){
    document.querySelector("h1").innerHTML="Its Drow";
}
else{
    document.querySelector("h1").innerHTML="Refresh Please"
}

