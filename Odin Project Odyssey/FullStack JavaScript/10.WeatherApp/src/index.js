import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const city = 'quebec';
  const apiKey = process.env.VISUAL_CROSSING_API_KEY;
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${apiKey}&contentType=json`;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response);
      console.log(response.resolvedAddress);
      console.log(response.currentConditions.temp);
      console.log(response.currentConditions.humidity);
      console.log(response.description);
      console.log('It is working!');
    })
    .catch(function(error) {
      console.log(error);
    });
});