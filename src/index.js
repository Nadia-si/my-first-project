function searchCity(event) {
  event.preventDefault();
  let cityName = document.querySelector(`#inputCity`).value;
  let heading = document.querySelector("h1");
  heading.innerHTML = cityName;

  getTemperature();
}
let cityWeather = document.querySelector(`#cityTemp`);
cityWeather.addEventListener("submit", searchCity);

function getTemperature() {
  let cityName = document.querySelector(`#inputCity`).value;
  let apiKey = "1a8e14dead82d28c527cf46b1e514682";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&&appid=${apiKey}&units=metric`;
  axios
    .get(apiUrl)
    .then(function (response) {
      let temperature = document.querySelector(".temperature");
      temperature.innerHTML = Math.round(response.data.main.temp);
      let weatherDescription = document.querySelector("h4");
      weatherDescription.innerHTML = response.data.weather[0].description;
      let windSpeed = document.querySelector("h5");
      windSpeed.innerHTML = ` Wind: ${Math.round(
        response.data.wind.speed
      )} km/h`;
      let humidity = document.querySelector("h6");
      humidity.innerHTML = ` Humidity: ${response.data.main.humidity} %`;
    })
    .catch(function () {
      let error = document.querySelector("h1");
      error.innerHTML = `Please write the correct city name!`;
    });
}

let currentTime = new Date();
let days = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
];
let today = days[currentTime.getDay()];
function checkMinutes() {
  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return minutes;
}
function checkHour() {
  let hour = currentTime.getHours();
  if (hour < 10) {
    hour = "0" + hour;
  }
  return hour;
}
let header = document.querySelector("h2");
header.innerHTML = `${today} ${checkHour()}:${checkMinutes()}`;
