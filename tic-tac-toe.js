// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var canvas = document.getElementById("game-board")
function () {
  var circle= document.createElementNS(namespace, "circle")
 circle.setAttribute("cx",40)
 circle.setAttribute("cy",50)
 circle.setAttribute("r",70)
 circle.setAttribute("fill","blue")
 canvas.appendChild("circle")
}
var createShape= "player1"
