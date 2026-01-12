const isOffLamp = document.getElementById("off-lamp");
console.log("off-lamp");
const myButton = document.getElementById("btn");
console.log("btn btn-primary");

myButton.addEventListener("click", function () {
  // console.log("ho cliccato");

  if (isOffLamp.src.includes("./img/white_lamp.png")) {
    isOffLamp.src = "./img/yellow_lamp.png";
  } else {
    isOffLamp.src = "./img/white_lamp.png";
  }
});
