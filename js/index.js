// Your code goes here

//Turns bus image in logo invisible on double click...
const funBus = document.querySelector("header img");
funBus.addEventListener("dblclick", e => {
  e.target.style.visibility = "hidden";
});

//Changes color of text on "Welcom to Fun Bus"
const funBusHeader = document.querySelector("header h2");
funBusHeader.addEventListener("mouseover", e => {
  e.target.style.color = "red";
});

//Keydown event that makes an alert...
window.addEventListener("keydown", e => {
  alert("Welcome to the fun bus");
});

//Mouseenter
const mapImg = document.querySelector(".content-section .img-content img");
mapImg.addEventListener("mouseenter", e => {
  e.target.style.border = "solid 5px black";
});

//Mouseleave
const canalText = document.querySelector(".inverse-content .text-content");
canalText.addEventListener("mouseleave", e => {
  e.target.style.background = "yellow";
});

//Click
const destBtn = document.querySelector(".btn");
destBtn.addEventListener("click", e => {
  e.target.style.background = "black";
  e.target.style.color = "red";
  e.target.style.border = "solid 1px red";
});

//wheel
document.querySelector("body").addEventListener("wheel", e => {
  e.target.style.background = "hotpink";
});

//Drag
const canalImg = document.querySelector(".inverse-content img");
canalImg.addEventListener("drag", e => {
  e.target.style.opacity = ".5";
});

//Resize
const boatImg = document.querySelector(".content-destination img");
window.addEventListener("resize", ()=> {
  boatImg.src = "https://images.unsplash.com/photo-1540946485063-a40da27545f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
});

//Mouseover
const advAwtText = document.querySelector(".inverse-content .text-content h2");
advAwtText.addEventListener("mouseover", e => {
    e.target.style.fontSize = "5rem"
})

//stopPropagation
const intro = document.querySelector(".intro");
intro.addEventListener("click", e => {
    e.target.style.background = "sienna";
})

//preventDefault()
const links = document.querySelectorAll("a");
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
  });
});
