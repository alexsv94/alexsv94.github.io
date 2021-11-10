const navMenu = document.querySelector('.navbar__menu');
const navTitle = document.querySelector('.navbar-title');
const navMenuContainer = document.querySelector('.navbar__menu-container');

const navMenuItemProfile = document.querySelector('#menuItem-profile');
const navMenuItemFavorites = document.querySelector('#menuItem-favorites');
const navMenuItemDeseases = document.querySelector('#menuItem-deseases');
const navMenuItemMedications = document.querySelector('#menuItem-medications');

navMenu.addEventListener('click', (event) => {
	event.stopPropagation();
	navMenuContainer.classList.toggle('navbar__menu-active');
});

document.addEventListener('click', (event) => {
	if (!event.target.closest('.navbar__menu-container')) {
		navMenuContainer.classList.remove('navbar__menu-active');
	}
});