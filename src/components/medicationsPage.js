export default {
	render(data) {
		document.querySelector('.navbar-title').innerHTML = 'Лек. препараты';
		const wrapper = document.querySelector('.content-wrapper');
		wrapper.innerHTML = '';

		const filterInput = document.createElement('input');
		filterInput.className = 'filter-input';
		filterInput.setAttribute('type', 'text');
		filterInput.setAttribute('placeholder', 'Фильтр...');
		filterInput.addEventListener('input', (e) => filterContentItems(e));

		const content = document.createElement('div');
		content.className = 'content-wrapper__content';

		wrapper.append(filterInput, content);

		data.map(item => {
			const contentItem = document.createElement('a');
			contentItem.className = 'content-wrapper__item';
			contentItem.setAttribute('href', `#medications/${item.id}`);
			contentItem.innerText = `${item.name}`;
			contentItem.id = item.id;
			content.append(contentItem);
		})
 
		function filterContentItems(filter) {
			const searchValue = filter.target.value;

			data.map(item => {
				const [textBefore, match, textAfter] = searchMatches(item.name, searchValue);
				const contentItem = document.getElementById(item.id);

				if (match || !searchValue) {
					contentItem.style.display = 'block';
					contentItem.style.opacity = 1;
					contentItem.innerHTML = `${textBefore}<span>${match}</span>${textAfter}`;
				} else {
					contentItem.style.opacity = 0;
					contentItem.style.display = 'none';
				}
			});
		}

		function searchMatches(text, value) {
			const index = text.toLowerCase().indexOf(value.toLowerCase());

			const textBefore = index > 0 ? text.substring(0, index) : "";
			const searchQueryMatch = index !== -1 && value ? `${text.substring(index, index + value.length)}` : "";
			const textAfter = index !== -1 && index + value.length !== text.length ? text.substring(index + value.length) : "";

			return [textBefore, searchQueryMatch, textAfter];
		}
	}
}