import './style.css';

export default function changeCredits(page) {
  const creditsPicture = document.querySelector('.creditsPicture');
  const credits = document.querySelector('.credits');

  if (page === 'home' && creditsPicture.classList.contains('no-show')) {
	  creditsPicture.classList.remove('no-show');
	  credits.classList.add('no-show');
  } else {
	creditsPicture.classList.add('no-show');
	credits.classList.remove('no-show');
  }
};
