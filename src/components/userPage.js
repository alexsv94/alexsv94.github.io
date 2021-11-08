import { logout } from "../http/userApi.js";

export default {
	render(user) {
		document.querySelector('.navbar-title').innerHTML = 'Профиль';
		const wrapper = document.querySelector('.content-wrapper');
		wrapper.innerHTML = '';

		const container = document.createElement('div');
		container.className = "content-wrapper__content";
		wrapper.append(container);
		container.innerHTML = `
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
		`;

		const editButton = document.createElement('button');
		editButton.className = "reg-button";
		editButton.innerText = "Редактировать";
		editButton.addEventListener('click', () => {
			container.innerHTML = `
			<div class="card">
				<span class="card__title">E-Mail</span>
				<div class="card__body" id="emailCard">
					<input type="text" id="email-input" placeholder="Введите e-mail..." class="data-input" value="${user.user.email}"/>
				</div>
			</div>
			<div class="card">
				<span class="card__title">Старый пароль</span>
				<div class="card__body" id="passwordCard">
					<input type="password" id="old-password-input" placeholder="Введите пароль..." class="data-input"/>
				</div>
			</div>
			<div class="card">
				<span class="card__title">Новый пароль</span>
				<div class="card__body" id="passwordCard">
					<input type="password" id="new-password-input" placeholder="Введите пароль..." class="data-input"/>
				</div>
			</div>
			<div class="card">
				<span class="card__title">Имя</span>
				<div class="card__body" id="emailCard">
					<input type="text" id="firstname-input" placeholder="Введите имя..." class="data-input" value="${user.user.firstname}"/>
				</div>
			</div>
			<div class="card">
				<span class="card__title">Фамилия</span>
				<div class="card__body" id="passwordCard">
					<input type="text" id="lastname-input" placeholder="Введите фамилию..." class="data-input" value="${user.user.lastname}"/>
				</div>
			</div>
			`
		});
		container.append(editButton);

		const exitButton = document.createElement('button');
		exitButton.className = "reg-button";
		exitButton.innerText = "Выйти";
		exitButton.addEventListener('click', () => {
			logout();
			location = '#auth'
		});
		container.append(exitButton);

	}
}