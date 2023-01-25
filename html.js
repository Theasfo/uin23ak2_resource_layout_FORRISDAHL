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


//overskrift



//HTML
var text = "W3Schools";
var result = text.link("https://www.w3schools.com/html/");
document.getElementById("b").innerHTML = result;

var text = "HTML Living standard";
var result = text.link("https://html.spec.whatwg.org/multipage/");
document.getElementById("c").innerHTML = result;

var text = "HTML.com Tutorials";
var result = text.link("https://html.com/");
document.getElementById("d").innerHTML = result;

