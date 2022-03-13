function analogTime() {
  time = new Date();

  hours = time.getHours();
  minutes = time.getMinutes();
  seconds = time.getSeconds();

  hoursRotation = 30 * hours + minutes / 2;
  minutesRotation = 6 * minutes;
  secondsRotation = 6 * seconds;

  document.querySelector("#hour");
  document.querySelector("#minute");
  document.querySelector("#second");

  hour.style.transform = `rotate(${hoursRotation}deg)`;
  minute.style.transform = `rotate(${minutesRotation}deg)`;
  second.style.transform = `rotate(${secondsRotation}deg)`;

  setInterval(analogTime, 1);
}
analogTime();
