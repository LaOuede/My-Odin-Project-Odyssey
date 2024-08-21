import './style.css';
import changeCredits from './credits';

const restaurantInfo = (function () {
  const name = 'Leaf & Root';
  const address = '123 Greenhaven Lane, EcoCity, EC 98765';

  const contact = {
    phone: '(555) 123-4567',
    email: 'info@leafandroot.eco',
    website: 'www.leafandroot.eco',
  };

  const operatingHours = {
    mondayToThursday: '11:00 AM - 9:00 PM',
    fridayToSaturday: '11:00 AM - 10:00 PM',
    sunday: '10:00 AM - 8:00 PM',
  };

  const culinaryTeam = [
    {
      name: 'Chef Amara Greenfield',
      specialization:
        'Integrating exotic herbs and plants into recipes, ensuring every dish is both flavorful and nutritious.',
    },
    {
      name: 'Chef Leo Bloom',
      specialization:
        'Brings a touch of French elegance to the vegan dishes, making each meal a fusion of tradition and innovation.',
    },
  ];

  const displayRestaurantInfo = () => {
    const content = document.querySelector('.content');
    content.innerHTML = '';
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    content.style.alignItems = 'center';
    content.style.marginLeft = '20vw';

    // Infos
    const aboutUs = document.createElement('div');
    aboutUs.className = 'elements';
    const aboutUsTitle = document.createElement('h2');
    aboutUsTitle.textContent = 'About Us';
    aboutUs.appendChild(aboutUsTitle);

    const address = document.createElement('p');
    address.innerHTML = `<b>${restaurantInfo.name}</b><br>Address: ${restaurantInfo.address}`;
    aboutUs.appendChild(address);

    const contact = document.createElement('p');
    contact.innerHTML = `Phone: ${restaurantInfo.contact.phone}<br>Email: ${restaurantInfo.contact.email}<br>Website: <a href="http://${restaurantInfo.contact.website}" target="_blank">${restaurantInfo.contact.website}</a>`;
    aboutUs.appendChild(contact);
    content.appendChild(aboutUs);

    // Hours
    const hours = document.createElement('div');
    hours.className = 'elements';
    const hoursTitle = document.createElement('h2');
    hoursTitle.textContent = 'Operating Hours';
    hours.appendChild(hoursTitle);

    const hoursSchedule = document.createElement('ul');
    hoursSchedule.innerHTML = `
	<li><b>Monday - Thursday:</b><br>${restaurantInfo.operatingHours.mondayToThursday}</li>
	<li><b>Friday - Saturday:</b><br>${restaurantInfo.operatingHours.fridayToSaturday}</li>
	<li><b>Sunday:</b><br>${restaurantInfo.operatingHours.sunday}</li>
	`;
    hours.appendChild(hoursSchedule);
    content.appendChild(hours);

    // Team
    const team = document.createElement('div');
    team.className = 'elements';
    const teamTitle = document.createElement('h2');
    teamTitle.textContent = 'Culinary Team';
    team.appendChild(teamTitle);

    restaurantInfo.culinaryTeam.forEach((chef) => {
      const chefInfo = document.createElement('p');
      chefInfo.innerHTML = `<b>${chef.name}</b>: ${chef.specialization}`;
      team.appendChild(chefInfo);
    });
    content.appendChild(team);
  };

  return {
    name,
    address,
    contact,
    operatingHours,
    culinaryTeam,
    displayRestaurantInfo,
  };
})();

const about = document.querySelector('#about');

about.addEventListener('click', () => {
  restaurantInfo.displayRestaurantInfo();
  changeCredits('about');
});
