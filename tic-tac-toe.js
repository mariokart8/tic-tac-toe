// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var currentShape = "circle";
  function createCircle() {
    var canvas = document.getElementById("game-board")
   if (currentShape == "circle") {
    var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "85")
  circle.setAttribute("cy", "85")
  circle.setAttribute("r", "20")
  circle.setAttribute("fill", "blue")
  canvas.appendChild(circle)
}
}

var currentShape = "circle";
  function circleCreation() {
    var canvas = document.getElementById("game-board")
   if (currentShape == "circle") {
    var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "170")
  circle.setAttribute("cy", "85")
  circle.setAttribute("r", "20")
  circle.setAttribute("fill", "red")
  canvas.appendChild(circle)

}
}
var currentShape = "circle";
  function circleMaker() {
    var canvas = document.getElementById("game-board")
   if (currentShape == "circle") {
    var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "255")
  circle.setAttribute("cy", "85")
  circle.setAttribute("r", "20")
  circle.setAttribute("fill", "red")
  canvas.appendChild(circle)

}
}
var currentShape = "circle";
  function circleMake() {
    var canvas = document.getElementById("game-board")
   if (currentShape == "circle") {
    var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "85")
  circle.setAttribute("cy", "160")
  circle.setAttribute("r", "20")
  circle.setAttribute("fill", "blue")
  canvas.appendChild(circle)
}
}
var turn= "player1"
function topLeft() {
  if(turn == "player1") {
    turn="player2"
  }else{
    turn="player2"
  }
}
