const countDown = setInterval(function () {
  const launchingTime = new Date("Feb 8, 2022 18:30:00").getTime();
  const date = new Date().getTime();
  const difference = launchingTime - date;

  let d = Math.floor(difference / (1000 * 60 * 60 * 24));
  let h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((difference % (1000 * 60)) / 1000);

  d = d < 10 ? "0" + d : d;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById("days").innerHTML = d;
  document.getElementById("hours").innerHTML = h;
  document.getElementById("minutes").innerHTML = m;
  document.getElementById("seconds").innerHTML = s;

  if (difference < 0) {
    clearInterval(countDown);
  }
}, 1000);
