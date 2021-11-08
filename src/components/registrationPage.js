import { registration } from "../http/userApi.js";

export default {
	render() {
		document.querySelector('.navbar-title').innerHTML = 'Профиль';
		const wrapper = document.querySelector('.content-wrapper');
		wrapper.innerHTML = '';

		const container = document.createElement('div');
		container.className = "content-wrapper__content";
		wrapper.append(container);
		container.innerHTML = `
			<div class="card">
				<span class="card__title">E-Mail</span>
				<div class="card__body" id="emailCard">
					<input type="text" id="email-input" placeholder="Введите e-mail..." class="data-input"/>
				</div>
			</div>
			<div class="card">
				<span class="card__title">Пароль</span>
				<div class="card__body" id="passwordCard">
					<input type="password" id="password-input" placeholder="Введите пароль..." class="data-input"/>
				</div>
			</div>
			<div class="card">
				<span class="card__title">Имя</span>
				<div class="card__body" id="emailCard">
					<input type="text" id="firstname-input" placeholder="Введите имя..." class="data-input"/>
				</div>
			</div>
			<div class="card">
				<span class="card__title">Фамилия</span>
				<div class="card__body" id="passwordCard">
					<input type="text" id="lastname-input" placeholder="Введите фамилию..." class="data-input"/>
				</div>
			</div>
			<button class="reg-button" id="reg-button">Регистрация</button>
			<span class="register-label">Есть аккаунт? <a href="#auth">Войти</a></span>
		`;

		const regButton = document.querySelector('#reg-button');
		regButton.addEventListener('click', async () => {
			const email = document.querySelector('#email-input').value;
			const password = document.querySelector('#password-input').value;
			const firstname = document.querySelector('#firstname-input').value;
			const lastname = document.querySelector('#lastname-input').value;

			try {
				await registration(email, password, firstname, lastname);
				location = '#user';
			} catch (e) {
				alert(e.message);
			}
		})

	}
}