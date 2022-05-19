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


function shrinkHero() {
  setInterval(()=>{
    const heroImg = document.querySelector('.image-container');
    const bio = document.querySelector('.bio');
    heroImg.style.width = '50%';
    bio.style.display = 'flex';
  }, 3000)
};

function removeHeroBorder() {
    const imgContainer = document.querySelector('.image-container');
    const welcomeText = document.getElementById('welcome-text');
    welcomeText.style.animationName = 'dissolve';
    welcomeText.addEventListener('animationend', ()=>{
      welcomeText.style.display='none';
      imgContainer.style.animationName = 'shrink-img-container'
    });
    imgContainer.addEventListener('animationend', shrinkHero);
}

setTimeout(removeHeroBorder, 4000);


const projectFlag = document.querySelector('.toggle');
const projectInfoPanel = document.querySelector('.project-info-panel');


function displayProjectInfo() {
  projectFlag.innerText = 'hide info';
  const projectInfoPanel = document.querySelector('.project-info-panel');
  const projectImgContainer = document.querySelector('.project-img-container');
  projectImgContainer.style.width = '50%';
  projectInfoPanel.style.display = 'flex';
}

function hideProjectInfo() {
  projectFlag.innerText = 'show info';
  const projectInfoPanel = document.querySelector('.project-info-panel');
  const projectImgContainer = document.querySelector('.project-img-container');
  projectImgContainer.style.width = '100%';
  projectInfoPanel.style.display = 'none';
}

projectFlag.addEventListener('click', ()=> {
  projectInfoPanel.style.display !== 'flex' ? displayProjectInfo() : hideProjectInfo();
});

