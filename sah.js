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


//SAH
var text = "Sanity documentation";
var result = text.link("https://www.sanity.io/docs");
document.getElementById("b").innerHTML = result;

var text = "OnCrawl: a beginners guide to headless CMS";
var result = text.link("https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/");
document.getElementById("c").innerHTML = result;

var text = "Section.io: Getting started with Sanity CMS";
var result = text.link("https://www.section.io/engineering-education/getting-started-with-sanity-cms/");
document.getElementById("d").innerHTML = result;

