
document.getElementById("mydiv").addEventListener("mouseover", mouseOver);
document.getElementById("mydiv").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("mydiv").textContent = 'New text';
}

function mouseOut() {
  document.getElementById("mydiv").textContent = 'hello world';
}