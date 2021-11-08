export default {
	render(medication) {
		document.querySelector('.navbar-title').innerHTML = medication.name;
		const wrapper = document.querySelector('.content-wrapper');
		wrapper.innerHTML = '';

		const container = document.createElement('div');
		container.className = "content-wrapper__content";
		container.innerHTML = `
		<div class="card">
			<span class="card__title">Форма выпуска</span>
			<select id="dosage-selector">
			</select>
		</div>`;
		wrapper.append(container);

		const dosageFormSelector = document.querySelector('#dosage-selector');
		dosageFormSelector.addEventListener('change', (e) => {
			const appModeCardText = document.querySelector('#app-mode-text');
			appModeCardText.innerHTML = medication.dosage_forms[e.target.value].application_mode;
		})

		medication.dosage_forms.map((form, index) => {
			const option = document.createElement('option');
			option.setAttribute('value', index);
			option.innerText = `${form.name} | ${form.dosage}`;
			dosageFormSelector.append(option);
		});

		generateCard('Показания', medication.indications);
		generateCard('Противопоказания', medication.contrindications);
		generateCard('Способ применения', medication.dosage_forms[0].application_mode, 'app-mode-text');

		function generateCard(title, text, id) {
			const card = document.createElement('div');
			card.className = 'card';
			card.innerHTML = `
				<span class="card__title">${title}</span>
			`;

			const cardBody = document.createElement('div');
			cardBody.className = "card__body";
			if (id) cardBody.setAttribute('id', id);
			cardBody.innerHTML = `${text}`;

			card.append(cardBody);
			container.append(card);
		}
	}
}