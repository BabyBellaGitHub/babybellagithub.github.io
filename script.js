function rotateHands() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  var hourRotation = 30 * hours + 0.5 * minutes;
  var minuteRotation = 6 * minutes + 0.1 * seconds;
  var secondRotation = 6 * seconds;

  var hourHand = document.querySelector(".hour-hand");
  var minuteHand = document.querySelector(".minute-hand");
  var secondHand = document.querySelector(".second-hand");

  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

// Rotate the hands every second
setInterval(rotateHands, 1000);
