(function initialize()
{
    console.log("initialize");
    var articles="";
    for(i=0; i < 12; i++)
    {
        articles+="<article></article>";
    }
    var main = document.getElementsByTagName("main")[0];
    main.innerHTML = articles;
    (showit())
}())
function ChangeColor()
{
    console.log("ChangeColor");
    var articles = document.getElementsByTagName('article');
    for( i = 0; i < 3; i++)
    {
        articles[i].style.backgroundColor = "black";
    }
}
function ChangeBack()
{
    console.log("ChangeBack");
    var articles = document.getElementsByTagName('article');
    for(i = 0; i < 3; i++)
    {
        articles[i].style.backgroundColor = "palevioletred";
    }
}
function showit()
{
    var articles = document.getElementsByTagName('article');
    articles[0].onmouseover= function()
    {
        articles[0].style.backgroundImage = "url('../ex3/images/N.jpg";
    }
    articles[0].onmouseout = function()
    {
        articles[0].style.backgroundImage = "none";
    }
}