document.addEventListener('DOMContentLoaded', function() {
	const icon = document.getElementById('menu-icon');
	const choicesList = document.getElementById('choices-list');

	icon.addEventListener('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		choicesList.style.display = choicesList.style.display === 'none' ? 'block' : 'none';
	});

	choicesList.querySelectorAll('li').forEach(function(item) {
		item.addEventListener('click', function() {
			console.log(`You have selected the ${item.id} choice`);
			choicesList.style.display = 'none';
		});
	});

	document.addEventListener('click', function() {
		if (choicesList.style.display === 'block') {
			choicesList.style.display = 'none';
		}
	});
  });