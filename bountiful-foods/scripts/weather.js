const units = "&units=Imperial";
const appid = "&appid=0cd9fb45bd729bfe668378eb17d0284a";

const curURL = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad' +units +appid;
const forURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.1581&lon=-117.3506&exclude=current,hourly,minutely,alerts' +units +appid;

async function apiFetch(apiURL, curFor) {
    try {
      const response = await fetch(apiURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data, curFor);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

function  displayResults(weatherData, curFor = "current") {
    // Current Weather
    if(curFor == "current"){
        const temp = weatherData.main.temp.toFixed(0);
        document.getElementById('temp').textContent = temp +"°F";
        const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
        const desc = weatherData.weather[0].description;
        const captionDesc = document.getElementById('conditions');
        const humidEl = document.getElementById('humid');
        const humidAPI = weatherData.main.humidity;
        console.log(humidAPI);
        const weathIMG = document.getElementById('weath-img');
        weathIMG.setAttribute('src', iconsrc);
        weathIMG.setAttribute('alt', desc);
        humidEl.textContent = `Humidity: ${humidAPI}%` ;
        captionDesc.textContent = desc;

        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
    }
    // Forecast
    else{
        const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        // Get relevant API info
        const date = new Date();
        const today = date.getDay();

        const hi1 = weatherData.daily[0].temp.max.toFixed(0);
        const hi2 = weatherData.daily[1].temp.max.toFixed(0);
        const hi3 = weatherData.daily[2].temp.max.toFixed(0);

        const lo1 = weatherData.daily[0].temp.min.toFixed(0);
        const lo2 = weatherData.daily[1].temp.min.toFixed(0);
        const lo3 = weatherData.daily[2].temp.min.toFixed(0);

        // DOM elements to be manipulated
        const day1 = document.getElementById("dOW1");
        day1.textContent = weekday[today+1];
        const day2 = document.getElementById("dOW2");
        day2.textContent = weekday[today+2];
        const day3 = document.getElementById("dOW3");
        day3.textContent = weekday[today+3];

        const sufFar = " °F"
        const hiEl1 = document.getElementById("hi1");
        hiEl1.textContent = hi1 +sufFar;
        const hiEl2 = document.getElementById("hi2");
        hiEl2.textContent = hi2 +sufFar;
        const hiEl3 = document.getElementById("hi3");
        hiEl3.textContent = hi3 +sufFar;

        const loEl1 = document.getElementById("lo1");
        loEl1.textContent = lo1 +sufFar;
        const loEl2 = document.getElementById("lo2");
        loEl2.textContent = lo2 +sufFar;
        const loEl3 = document.getElementById("lo3");
        loEl3.textContent = lo3 +sufFar;


    }
    

}

apiFetch(curURL, "current");
apiFetch(forURL, "forecast");