const tempIn = document.querySelector("#temp");
const humidity = document.querySelector("#humidity");
const condition  = document.querySelector("#condition");
const weatherIcon = document.querySelector("#weatherIcon");
const windSpeedIn = document.querySelector("#windSpeed");
const alertInfo = document.querySelector("#alertInfo");

const url = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&exclude=hourly,minutely&appid=8017c1d5aea32b6094764ab6d12a29de&units=imperial"
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
          const data = await response.json();
          console.log(data); 
          displayResults(data);
          calWindChill(tempIn, windSpeedIn);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch();

function  displayResults(weatherData) {    
    tempIn.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    humidity.innerHTML = `${weatherData.main.humidity.toFixed(0)}`;
    windSpeedIn.innerHTML =`${weatherData.wind.speed.toFixed(0)}`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    condition.innerHTML = weatherData.weather[0].description;
    

    
    const lower = condition.innerHTML.toLowerCase();
    const str = lower.split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    let word = str.join(' ');
  

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', word);
    captionDesc.textContent = word;
    
}


var temperature = parseFloat(document.querySelector('#temp').textContent)
console.log(temperature)


var windSpeed = parseFloat(document.querySelector('#windSpeed').textContent)
console.log(windSpeed)


function calWindChill(tempIn, windSpeedIn){

    var windChill = 35.74 + 0.6215*tempIn - (35.75*windSpeedIn**0.16) + 0.4275 * tempIn * windSpeedIn**0.16
    return windChill
}


var windChillValue = ''
if (tempIn <= 60 && windSpeedIn >= 3) {windChillValue = (calWindChill(tempIn, windSpeedIn)).toFixed(2)}
else {windChillValue = "N/A"}
console.log(windChillValue)



document.querySelector('#windChill').textContent = windChillValue