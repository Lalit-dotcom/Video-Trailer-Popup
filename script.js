let buttonEl = document.querySelector(".btn");
let closeIcon = document.querySelector(".close-icon");
let divEl = document.querySelector(".trailer-container");
let videoEl = document.querySelector("video");
buttonEl.addEventListener("click",() => {
    divEl.classList.remove("active");
})
closeIcon.addEventListener("click",() => {
    divEl.classList.add("active");
    videoEl.pause();          /*used pause and currentTime to set the video to restart when opened again.*/
    videoEl.currentTime = 0;
})