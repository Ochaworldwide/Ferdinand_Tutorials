const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".course_slider news");
const imagery = document.querySelectorAll("team_slider team");
const doter = document.querySelectorAll(".doter-container button");
let i = 0; // current slide
let j = 3; // total slides



function next(){
    document.getElementById("content" + (i+1)).classList.remove("active");
    i = ( j + i + 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active");
    indicator( i+ 1 );
}

function prev(){
    document.getElementById("content" + (i+1)).classList.remove("active");
    i = (j + i - 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active");
    indicator(i+1);
}

function indicator(num){
    dots.forEach(function(dot){
        dot.style.backgroundColor = "transparent";
    });
    document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor= "#076bb8";
}

function dot(index){
    images.forEach(function(image){
        image.classList.remove("active");
    });
    document.getElementById("content" + index).classList.add("active");
    i = index - 1;
    indicator(index);
}








function nexter(){
    document.getElementById("team_content" + (i+1)).classList.remove("active");
    i = ( j + i + 1) % j;
    document.getElementById("team_content" + (i+1)).classList.add("active");
    indicate( i+ 1 );
}

function prever(){
    document.getElementById("team_content" + (i+1)).classList.remove("active");
    i = (j + i - 1) % j;
    document.getElementById("team_content" + (i+1)).classList.add("active");
    indicate(i+1);
}

function indicate(num){
    doter.forEach(function(dot){
        dot.style.backgroundColor = "transparent";
    });
    document.querySelector(".doter-container button:nth-child(" + num + ")").style.backgroundColor= "#076bb8";
}

function dot(index){
    imagery.forEach(function(image){
        image.classList.remove("active");
    });
    document.getElementById("team_content" + index).classList.add("active");
    i = index - 1;
    indicate(index);
}

