// import {validate} from "../alert.js";

let text = document.getElementById('digital');
let digital = text.textContent;
let split_text = digital.split("");

text.innerHTML = '';
let i = 0;
for(i = 0; i < split_text.length; i++) {
    text.innerHTML += "<span>" + split_text[i] + "</span>";
}

let char = 0;
let timer = setInterval(animate, 100);

function animate() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fadeIn');
    char++;
    if(char === split_text.length) {
        clearTimeout(timer);
        timer = null;
        char++;
         return;
    }
   
    // for( j = 0 ;j == split_text.length; j++) {
    //     clearTimeout(timer);
    //     timer = null;
    //     return
    // }
}
let welcome_text = document.getElementById('welcome');
let welcome = document.getElementById('welcome').textContent;
let split_welcome = welcome.split("");
let display_welcome = setTimeout(myFunction, 100);

welcome_text.innerHTML="";
let j = 0;
for(j = 0; j < split_welcome.length; j++){
         welcome_text.innerHTML += "<span>" + split_welcome[j] + "</span>";
    }

function myFunction() {
    // let welcome_span = welcome_text.querySelectorAll('i')[j];
    // welcome_span.classList.toggle('fadeIn');
    j++;
    if(i < split_welcome - 1) {
        i++;
    } else{
        i = 0;
    }
}

window.onload = animate();