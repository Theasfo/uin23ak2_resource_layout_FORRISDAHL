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

//JS
var text = "W3Schools";
var result = text.link("https://www.w3schools.com/js/");
document.getElementById("b").innerHTML = result;

var text = "MDN Web Docs";
var result = text.link("https://developer.mozilla.org/en-US/docs/Web/JavaScript");
document.getElementById("c").innerHTML = result;

var text = "How to read JavaScript Documentation";
var result = text.link("https://www.youtube.com/watch?v=O3iR-CIufKM");
document.getElementById("d").innerHTML = result;



