//var
const allColor = document.querySelectorAll(".color");
const clear = document.querySelector("#eraser").addEventListener("click",eraser);
let color = "lightBlue";
let penSize = 5;
let painting = false;
let bgColor = 'white';

//canvas.js
window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");

  function start(e) {
    painting = true;
    draw(e);
  }

  function finish() {
    painting = false;
    context.beginPath();
  }

  function draw(e) {
    if (!painting) return;

    context.strokeStyle = color; //var color
    context.lineWidth = penSize; //var size
    context.lineCap = "round";

    let x = e.offsetX;
    let y = e.offsetY;

    context.lineTo(x, y);
    context.stroke();
    context.beginPath();
    context.moveTo(x, y);
  }

  canvas.addEventListener("mousedown", start);
  canvas.addEventListener("mouseup", finish);
  canvas.addEventListener("mousemove", draw);
});

//active button and get colors
function selectColor(e) {
  removeActive();
  color = e.getAttribute("data-value");
  e.classList.add("active");
}
function removeActive() {
  allColor.forEach((c) => {
    c.classList.remove("active");
  });
}

//sizeof the pen
function penSizeChanging(size) {
  penSize = size;
}

//pick color
function pickedColorChange(col) {
  color = col.value;
}

eraser
function eraser(){
  penSize = 10
  color = "black";
}

//download your art
document.querySelector("a").addEventListener("click", (e) => {
  const a = document.querySelector("#down-load");
  a.href = canvas.toDataURL();
  //'--->this code works everytime for downloading

  // e.target.href = canvas.toDataURL();
  //'----> sometimes this code not works for downloading
});
