/*
-------------------------------------
This code creates and renders the welcome
text animation
*/
let i = 0;
let txt = 'Welcome, to my personal portfolio.'; /* The text */
const speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("welcome-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout(typeWriter, 1500);
//welcome text animation ends here ----------------------------------------



function removeWelcomeText() {
    const welcomeText = document.getElementById('welcome-text');
    welcomeText.style.animationName = 'dissolve';
    welcomeText.addEventListener('animationend', ()=>{
      welcomeText.style.display='none';
    });
}

setTimeout(removeWelcomeText, 4000);

