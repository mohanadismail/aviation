var refresh = document.getElementById("new");
refresh.addEventListener("click", function()
{
    location.reload();
}
)
var para = document.createElement("p");
var x = Math.floor(Math.random()*256);
var y = Math.floor(Math.random()*256);
var z = Math.floor(Math.random()*256);
var wrong = document.getElementById("again");
para.innerText=("RGB (" + x + "," + y + "," + z + ")");
para.style.color="white";
para.style.textAlign="center";
para.style.fontSize="5rem";
para.style.fontFamily="Assistant, sans-serif";
para.style.position="relative";
para.style.bottom="14rem";
document.getElementById("above").appendChild(para);
var card = document.getElementsByClassName("card");
for (i = 0; i< card.length; i++)
{
    var correct = Math.floor(Math.random()*card.length+1);
    var correct_color = "rgb(" + x + "," + y + "," + z + ")";
    var rand_color = "rgb(" + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + ")";
    if (i == correct - 1)
    {
        card[i].style.backgroundColor=correct_color;
        card[i].addEventListener("click", function()
        {
            wrong.style.opacity="0";
            for (i = 0; i< card.length; i++)
            {
                card[i].style.opacity="1";
                card[i].style.backgroundColor=correct_color;
                card[i].style.transitionDuration="0.5s";
                var yay = document.getElementById("above");
                yay.style.backgroundColor=correct_color;
                yay.style.transitionDuration="0.5s";
            }
        }
        )
    }
    else
    {
        card[i].style.backgroundColor=rand_color;
        card[i].addEventListener("click", function()
        {
            wrong.style.opacity="1";
            card[i].style.opacity="0";
        }
        )
    }
}
