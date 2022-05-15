//var
const allColor = document.querySelectorAll(".color");
const clear = document.querySelector("#eraser");
const clearFullCanvas = document.querySelector("#trash");

//var to implement in change of color ,sizeOfPen and others
let color = "lightBlue";
let penSize = 5;
let painting = false;
let bgColor = "white";

//canvas.js
window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");

  function start(e) {
    painting = true; //f
    draw(e);
  }

  function finish() {
    painting = false; //t
    context.beginPath();
  }

  function draw(e) {
    if (!painting) return;
    // if return false below code will run

    context.strokeStyle = color; //var color
    context.lineWidth = penSize; //var size
    context.lineCap = "round"; // rounded edges

    //getting xand y value
    let x = e.offsetX;
    let y = e.offsetY;

    context.lineTo(x, y); //  -----------
    context.stroke(); // ---- == ===
    context.beginPath(); // .--.
    context.moveTo(x, y); // -----/----\--
  }

  canvas.addEventListener("mousedown", start); //holded mouse to draw
  canvas.addEventListener("mouseup", finish); //release mouse
  canvas.addEventListener("mousemove", draw); //based on start,end function return value
});

//eraser and fullCanvas clear listeners
clear.addEventListener("click", eraser);
clearFullCanvas.addEventListener("click", clearCanvas);

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

//sizeOf the pen
function penSizeChanging(size) {
  penSize = size;
}

//pick color
function pickedColorChange(col) {
  color = col.value;
}

// eraser
function eraser() {
  penSize = 10;
  color = "black";
}

//clearCanvas
function clearCanvas() {
  location.reload(); //bad idea
}

//download your art
document.querySelector("a").addEventListener("click", (e) => {
  const a = document.querySelector("#down-load");
  a.href = canvas.toDataURL();
  //'--->this code works everytime for downloading

  // e.target.href = canvas.toDataURL();
  //'----> sometimes this code not works for downloading
});
