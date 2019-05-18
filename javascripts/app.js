// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}

console.log("La dirección inicial de rover es: " + rover.direction + " y su posición: " + rover.x + " " + " " + rover.y);

// ======================
function turnLeft(rover) {
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
  console.log("TurnLeft was called! La nueva dirección del rover es " + rover.direction);
}

function turnRight(rover) {
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log("TurnRigth was called! La nueva dirección del rover es " + rover.direction);
}

function moveForward(rover) {
  console.log("moveForward was called");
  switch (currentDirection) {
    case "N":
      rover.y += 1;
      break;
    case "W":
      rover.x -= 1;
      break;
    case "S":
      rover.y -= 1;
      break;
    case "E":
      rover.x += 1;
      break;
  }
}

function command(commandRules){
  for(var i = 0; i < commandRules.length; i++){
    var rules = commandRules[i];
    if (commandRules === "f" || commandRules === "r" || commandRules === "l"){
      switch(commandRules){
        case "f":
          moveForward(rover.direction);
          break;
      case "r":
          turnRight(rover.direction);
          break;
      case "l":
          turnLeft(rover.direction);
          break;
      }
    }
  }
