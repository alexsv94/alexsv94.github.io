import { login } from "../http/userApi.js";

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
			<button class="reg-button" id="login-button">Войти</button>
			<span class="register-label">Нет аккаунта? <a href="#registration">Регистрация</a></span>
		`;

		const loginButton = document.querySelector('#login-button');
		loginButton.addEventListener('click', async () => {
			const email = document.querySelector('#email-input').value;
			const password = document.querySelector('#password-input').value;

			try {
				await login(email, password);
				location = '#user';
			} catch (e) {
				alert(e.message)
			}
		})

	}
}