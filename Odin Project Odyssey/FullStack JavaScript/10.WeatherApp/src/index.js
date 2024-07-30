import './style.css';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const city = document.querySelector('#city').value;
  getWeather(city);
});

function getWeather(city) {
  const apiKey = process.env.VISUAL_CROSSING_API_KEY;
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${apiKey}&contentType=json`;
  
  fetch(url, { mode: 'cors' })
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response);
    console.log(response.resolvedAddress);
    console.log(response.currentConditions.temp);
    console.log(response.currentConditions.humidity);
    console.log(response.description);
  })
  .catch(function(error) {
    console.log(error);
  });
}
