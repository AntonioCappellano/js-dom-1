const isOffLamp = document.getElementById("off-lamp");
console.log("off-lamp");
const myButton = document.getElementById("btn");
console.log("btn btn-primary");

myButton.addEventListener("click", function () {
  console.log("ho cliccato");
  console.log(isOffLamp.src);
  if (isOffLamp.src.includes("white_lamp.png")) {
    isOffLamp.src = "./img/yellow_lamp.png";
    myButton.innerText = "Spegni";
  } else {
    isOffLamp.src = "./img/white_lamp.png";
    myButton.innerText = "Accendi";
  }
});
