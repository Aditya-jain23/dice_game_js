
var randomNumber1=Math.floor((Math.random()*6))+1;
var random_img1="images/dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",random_img1);
var randomNumber2=Math.floor(Math.random()*6)+1;
var random_img2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",random_img2);
var element= document.querySelector("h1"); 
if(randomNumber1===randomNumber2)
{
    element.innerHTML="Draw 😔";
}
else if(randomNumber1 > randomNumber2)
{
    element.innerHTML="Player1 wins 😁";
}
else{
    element.innerHTML="Player2 wins 😁";
}