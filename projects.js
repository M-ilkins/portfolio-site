window.onload = animatePage;

function animatePage() {
    const projectImg = document.querySelector('.project-img');
    const bodyElem = document.querySelector('body');
    const projectsHeading = document.querySelector('.project-section-title');
    bodyElem.style.animationName = 'backgroundWave';
    bodyElem.onanimationend = () => {
      projectsHeading.style.animationName = 'textFadeIn';
      projectsHeading.onanimationend = () => projectsHeading.style.opacity = '1';
      projectImg.style.animationName = 'fadeIn';
      projectImg.onanimationend = () => {
        projectImg.style.opacity = '0.5';
        projectImg.onmouseenter = () => projectImg.style.opacity = '1';
        projectImg.onmouseleave = () => projectImg.style.opacity = '0.5';
    }
}
};
