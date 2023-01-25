function funk(){
    document.getElementById("css").href = "css.html";
    
}

function funk2(){
    document.getElementById("js").href = "java.html";
    
}

function funk3(){
    document.getElementById("react").href = "react.html";
}

function funk4(){
    document.getElementById("sah").href = "sah.html";
}



var text = "HTML";
document.getElementById("html").innerHTML = text;

var text = "CSS";
document.getElementById("css").innerHTML = text;

var text = "JAVACRIPT";
document.getElementById("js").innerHTML = text;

var text = "REACT";
document.getElementById("react").innerHTML = text;

var text = "Sanity and headless CMS";
document.getElementById("sah").innerHTML = text;


//CSS

var text = "W3Schools";
var result = text.link("https://www.w3schools.com/css/");
document.getElementById("b").innerHTML = result;

var text = "W3C HTML & CSS Standards";
var result = text.link("https://www.w3.org/standards/webdesign/htmlcss.html");
document.getElementById("c").innerHTML = result;

var text = "CSS Tricks";
var result = text.link("https://css-tricks.com/");
document.getElementById("d").innerHTML = result;



