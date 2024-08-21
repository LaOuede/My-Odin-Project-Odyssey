import './style.css';
import './menu.js';
import './home.js';
import './about.js';
import displayHome from './home.js';
import changeCredits from './credits.js';

document.addEventListener('DOMContentLoaded', () => {
  displayHome();
  changeCredits('home');
});
