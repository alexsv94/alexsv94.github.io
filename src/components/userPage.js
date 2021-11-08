export default {
	render(user) {
		document.querySelector('.navbar-title').innerHTML = 'Профиль';
		const wrapper = document.querySelector('.content-wrapper');
		wrapper.innerHTML = `
			<div class="card">
				<span class="card__title">E-Mail</span>
				<div class="card__body" id="emailCard">${user.user.email}</div>
			</div>
			<div class="card">
				<span class="card__title">Пароль</span>
				<div class="card__body" id="passwordCard">************</div>
			</div>
			<div class="card">
				<span class="card__title">Имя</span>
				<div class="card__body" id="firstnameCard">${user.user.firstname}</div>
			</div>
			<div class="card">
				<span class="card__title">Фамилия</span>
				<div class="card__body" id="lastnameCard">${user.user.lastname}</div>
			</div>
			<button class="content-wrapper__item" id="edit-button">Редактировать</button>
		`;
	}
}