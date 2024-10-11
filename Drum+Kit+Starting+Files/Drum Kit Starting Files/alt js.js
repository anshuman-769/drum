var drumElements = document.querySelectorAll(".drum");

drumElements.forEach(function(element) {
  element.addEventListener("click", function(event) {
    var innerHTML = event.target.innerHTML;

    var audioMap = {
      "w": "sounds/tom-1.mp3",
      "a": "sounds/tom-2.mp3",
      "s": "sounds/tom-3.mp3",
      "d": "sounds/tom-4.mp3",
      "j": "sounds/snare.mp3",
      "k": "sounds/crash.mp3",
      "l": "sounds/kick-bass.mp3"
    };

    if (audioMap[innerHTML]) {
      var audio = new Audio(audioMap[innerHTML]);
      audio.play();
    } else {
      console.log("Unknown drum sound: " + innerHTML);
    }
  });
});