import '../css/style.css';
import getWeather from './apiFunctions';
import dataWeather from './renderFunctions';

const form = document.querySelector('form');
let data;

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const city = document.querySelector('#city').value;
  data = await getWeather(city);

  dataWeather.getInfos(data);
  dataWeather.displayForecast();
  form.reset();
});