export default {
	render(desease) {
		document.querySelector('.navbar-title').innerHTML = desease.name;
		const wrapper = document.querySelector('.content-wrapper');
		wrapper.innerHTML = '';

		const container = document.createElement('div');
		container.className = "content-wrapper__content";
		wrapper.append(container);

		generateCard('Симптомы', desease.symptoms);
		generateCard('Диагностика', desease.diagnostics);
		generateMedicationsCard('Лечение', desease.medications)

		function generateCard(cardTitle, data) {
			const card = document.createElement('div');
			card.className = "card";
			card.innerHTML = `<span class="card__title">${cardTitle}</span>`;
			container.append(card);

			const body = document.createElement('div');
			body.className = "card__body";
			card.append(body)

			data.map(item => {
				const dataItem = document.createElement('div');
				dataItem.className = "item-cell";
				dataItem.innerHTML = `${item.name}`;
				body.append(dataItem)
			})
		}

		function generateMedicationsCard(cardTitle, data) {
			const card = document.createElement('div');
			card.className = "card";
			card.innerHTML = `<span class="card__title">${cardTitle}</span>`;
			container.append(card);

			const body = document.createElement('div');
			body.className = "card__body";
			card.append(body)

			data.map(item => {
				const dataItem = document.createElement('a');
				dataItem.className = "item-cell";
				dataItem.innerHTML = `${item.name}`;
				dataItem.setAttribute('href', `#medications/${item.id}`)
				body.append(dataItem)
			})
		}
	}
}