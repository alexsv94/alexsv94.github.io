import { logout, updateUserData } from "../http/userApi.js";

export default {
	render(user) {
		document.querySelector('.navbar-title').innerHTML = 'Профиль';
		const wrapper = document.querySelector('.content-wrapper');
		wrapper.innerHTML = '';

		const container = document.createElement('div');
		container.className = "content-wrapper__content";
		wrapper.append(container);

		function renderDefaultPageState() {
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
			<button class="reg-button" id="editBtn">Редактировать</button>
			<button class="reg-button" id="logoutBtn">Выйти</button>
			`;

			const editButton = document.querySelector('#editBtn');
			editButton.addEventListener('click', renderEditForm);

			const exitButton = document.querySelector('#logoutBtn');
			exitButton.addEventListener('click', () => {
				logout();
				location = '#auth'
			});
		}

		function renderEditForm() {
			container.innerHTML = `
			<div class="card">
				<span class="card__title">E-Mail</span>
				<div class="card__body" id="emailCard">
					<input type="text" id="email-input" placeholder="Введите e-mail..." class="data-input" value="${user.user.email}"/>
				</div>
			</div>
			<div class="card">
				<span class="card__title">Старый пароль</span>
				<div class="card__body">
					<input type="password" id="old-password-input" placeholder="Введите пароль..." class="data-input"/>
				</div>
			</div>
			<div class="card">
				<span class="card__title">Новый пароль</span>
				<div class="card__body">
					<input type="password" id="new-password-input" placeholder="Введите пароль..." class="data-input"/>
				</div>
			</div>
			<div class="card">
				<span class="card__title">Имя</span>
				<div class="card__body">
					<input type="text" id="firstname-input" placeholder="Введите имя..." class="data-input" value="${user.user.firstname}"/>
				</div>
			</div>
			<div class="card">
				<span class="card__title">Фамилия</span>
				<div class="card__body">
					<input type="text" id="lastname-input" placeholder="Введите фамилию..." class="data-input" value="${user.user.lastname}"/>
				</div>
			</div>
			<button class="reg-button" id="confirmBtn">Сохранить</button>
			<button class="reg-button" id="cancelBtn">Отмена</button>
			`
			const confirmButton = document.querySelector('#confirmBtn');
			const cancelButton = document.querySelector('#cancelBtn');

			confirmButton.addEventListener('click', async () => {
				const email = document.querySelector('#email-input').value;
				const password = document.querySelector('#old-password-input').value;
				const newPassword = document.querySelector('#new-password-input').value;
				const firstname = document.querySelector('#firstname-input').value;
				const lastname = document.querySelector('#lastname-input').value;

				try {
					const result = await updateUserData({
						email,
						password,
						newPassword,
						firstname,
						lastname
					});
					user.setUser(result);
					location.reload();
				} catch (e) {
					alert(e.message)
				}
			})

			cancelButton.addEventListener('click', () => {
				renderDefaultPageState();
			})
		}

		renderDefaultPageState();
	}
}