var ind = document.getElementById("text1");
var team = document.getElementById("text2");
var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");
var back1 = document.getElementById("back1");
var back2 = document.getElementById("back2");
ind.addEventListener("click", function()
{
    card1.style.transform=("translateX(40rem)");
    card1.style.opacity="0";
    card2.style.transform=("translateX(20rem)");
    card2.style.opacity="0";
    card3.style.opacity="0.8";
    card3.style.transform=("translateY(-30rem)");
})
card1.addEventListener("mouseover", function()
{
    card1.style.transform=("translateY(-2rem)");
})
card1.addEventListener("mouseout", function()
{
    card1.style.transform=("translateY(0rem)");
})
card2.addEventListener("mouseover", function()
{
    card2.style.transform=("translateY(-2rem)");
})
card2.addEventListener("mouseout", function()
{
    card2.style.transform=("translateY(0rem)");
})
back1.addEventListener("click", function()
{
    card1.style.transform=("translateX(0rem)");
    card1.style.opacity="1";
    card2.style.transform=("translateX(0rem)");
    card2.style.opacity="1";
    card3.style.opacity="0";
    card3.style.transform=("translateY(0rem)");
})
team.addEventListener("click", function()
{
    card1.style.transform=("translateX(-20rem)");
    card1.style.opacity="0";
    card2.style.transform=("translateX(-40rem)");
    card2.style.opacity="0";
    card4.style.opacity="0.8";
    card4.style.transform=("translateY(-25rem)");
})
back2.addEventListener("click", function()
{
    card1.style.transform=("translateX(0rem)");
    card1.style.opacity="1";
    card2.style.transform=("translateX(0rem)");
    card2.style.opacity="1";
    card4.style.opacity="0";
    card4.style.transform=("translateY(0rem)");
})