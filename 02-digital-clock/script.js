function digitalTime() {
  let time = new Date();

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  hours = hours > 12 ? hours - 12 : hours;
  hours = hours == 0 ? 12 : hours;
  hours = (hours < 10 ? "0" : "") + hours;

  let session = hours < 12 ? "AM" : "PM";
  let currentTime = hours + ":" + minutes + ":" + seconds + " " + session;

  document.getElementById("clockDisplay").innerHTML = currentTime;

  setInterval(digitalTime, 1);
}
digitalTime();
