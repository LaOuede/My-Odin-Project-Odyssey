import './style.css';
import changeCredits from './credits';

const home = document.querySelector('#home');

home.addEventListener('click', () => {
  displayHome();
});

export default function displayHome() {
  const content = document.querySelector('.content');
  content.innerHTML = '';
  content.style.display = 'grid';
  content.style.gridTemplateColumns = '';
  content.style.marginLeft = '';

  // Block
  const homeBlock = document.createElement('div');
  homeBlock.classList = 'homeBlock';
  content.appendChild(homeBlock);

  // Image
  const image = document.createElement('div');
  image.className = 'image';
  const img = document.createElement('img');
  img.src = '../images/Restaurant.JPG';
  image.appendChild(img);
  homeBlock.appendChild(image);

  // Text
  const text = document.createElement('div');
  text.className = 'text';
  const title = document.createElement('h1');
  title.className = 'title';
  title.textContent = 'Leaf & Root';
  text.appendChild(title);
  const description = document.createElement('p');
  description.className = 'headline';
  description.innerHTML = `Indulge in a vibrant culinary journey at Leaf & Root, your go-to destination for delicious and innovative vegetarian cuisine.<br><br>Savor the harmony of nature's finest ingredients, artfully crafted into dishes that celebrate the essence of plant-based dining.<br><br>Discover the true taste of freshness with every bite!`;
  text.appendChild(description);
  homeBlock.appendChild(text);

  changeCredits('home');
}
