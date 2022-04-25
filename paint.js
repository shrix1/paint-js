//var
const allColor = document.querySelectorAll(".color");
const clear = document.querySelector("#eraser").addEventListener("click",eraser);
const clearFullCanvas = document.querySelector("#trash").addEventListener("click", clearCanvas);
let color = "lightBlue";
let penSize = 5;
let painting = false;
let bgColor = 'white';

//canvas.js
window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");

  const start = e => {
    painting = true;
    draw(e);
  }

  const finish = () => {
    painting = false;
    context.beginPath();
  }

  const draw = e => {
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
const selectColor = e => {
  removeActive();
  color = e.getAttribute("data-value");
  e.classList.add("active");
}
const removeActive =()=> {
  allColor.forEach((c) => {
    c.classList.remove("active");
  });
}

//sizeof the pen
const penSizeChanging= (size)=> {
  penSize = size;
}

//pick color
const pickedColorChange=(col)=> {
  color = col.value;
}

// eraser
const eraser=()=>{
  penSize = 10
  color = "black";
}

//clearCanvas
const clearCanvas=()=>{
  location.reload()  //bad idea
}

//download your art
document.querySelector("a").addEventListener("click", (e) => {
  const a = document.querySelector("#down-load");
  a.href = canvas.toDataURL();
  //'--->this code works everytime for downloading

  // e.target.href = canvas.toDataURL();
  //'----> sometimes this code not works for downloading
});
