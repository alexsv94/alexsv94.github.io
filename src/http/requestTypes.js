export const authRequest = async (url, method, data) => {
	const response = await fetch(url, {
		method: method || 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
		},
		body: JSON.stringify(data)
	});
	return await response.json();
}

export const commonRequest = async (url, method, data) => {
	const response = await fetch(url, {
		method: method || 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data)
	});
	return await response.json();
}