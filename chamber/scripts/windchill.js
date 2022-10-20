let t = parseFloat(document.querySelector("#t").textContent);
let s = parseFloat(document.querySelector("#s").textContent);
let windchill = "";

if (t <= 50 && s > 3) {
  windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16);
  windchill = parseFloat(windchill.toFixed(1));
  windchill = `${windchill}&#176;F`;
} else {
  windchill = "N/A";
}
document.querySelector("#w").innerHTML = windchill;

function windChill(temp, speed) {
  return windchill;
}