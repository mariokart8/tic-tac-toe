// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var currentShape = "circle"
  function createCircle() {
    var canvas = document.getElementById("game-board")
   if (currentShape == "circle") {
    var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 85)
  circle.setAttribute("cy", 85)
  circle.setAttribute("r", 20)
  circle.setAttribute("fill", "blue")
  canvas.appendChild("circle")
  currentShape = "rect"
}
