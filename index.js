

//Detect mouse clicks on the instruments
for (var i = 0; i < 7; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    highlightButton(buttonInnerHTML);
  });
}

//Detect keyboard inputs for the instruments
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  highlightButton(event.key);
});



//Play sound based on key input
function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio2 = new Audio("sounds/kick-bass.mp3");
      audio2.play();
      break;
    case "s":
      var audio3 = new Audio("sounds/snare.mp3");
      audio3.play();
      break;
    case "d":
      var audio4 = new Audio("sounds/tom-1.mp3");
      audio4.play();
      break;
    case "j":
      var audio5 = new Audio("sounds/tom-2.mp3");
      audio5.play();
      break;
    case "k":
      var audio6 = new Audio("sounds/tom-3.mp3");
      audio6.play();
      break;
    case "l":
      var audio7 = new Audio("sounds/tom-4.mp3");
      audio7.play();
      break;
  }
}

//Highlight selected buttonInnerHTML
function highlightButton(key){
  var pressedButton = document.querySelector("." + key);
  pressedButton.classList.add("pressed");
  //Delay for 1 second
  setTimeout(function(){
      pressedButton.classList.remove("pressed");
  },100);

}
