const API_KEY = `6ea80abf32380b4822b52d312f110be5`;
const searchTemperature = () => {
  const city = document.getElementById('city-weather');
  const cityValue = city.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API_KEY}&units=metric`;
  city.value = ''
  
  fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data));
}
const setThemeName = (id, text) => {
  document.getElementById(id).innerText = text;
}

const displayWeather = temperature => {
  console.log(temperature);
  setThemeName('city', temperature.name);
  setThemeName('temperature', temperature.main.temp);
  setThemeName('condition', temperature.weather[0].main);
  // set weather icon
  const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const imgIcon = document.getElementById('weather-icon');
  imgIcon.setAttribute('src', url);
}