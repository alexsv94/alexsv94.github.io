import { SERVER_API } from "../consts.js";
import { authRequest, commonRequest } from "./requestTypes.js";
import { user } from '../app.js'

export const registration = async (email, password, firstname, lastname) => {
	const body = await commonRequest(
		SERVER_API + '/user/registration',
		'POST',
		{ email, password, firstname, lastname }
	);
	localStorage.setItem('auth_token', body.token)
	return jwt_decode(body.token);
}

export const login = async (email, password) => {
	const body = await commonRequest(
		SERVER_API + '/user/login',
		'POST',
		{ email, password }
	);
	localStorage.setItem('auth_token', body.token)
	return jwt_decode(body.token);
}

export const updateUserData = async (userToUpdate) => {
	const body = await authRequest(
		SERVER_API + `/user/${user.user.id}`,
		'PUT',
		{
			email: userToUpdate.email,
			password: userToUpdate.password,
			newPassword: userToUpdate.newPassword,
			firstname: userToUpdate.firstname,
			lastname: userToUpdate.lastname
		}
	);
	localStorage.setItem('auth_token', body.token)
	return jwt_decode(body.token);
}

export const check = async () => {
	const body = await authRequest(SERVER_API + '/user/auth')
	localStorage.setItem('auth_token', body.token)
	return jwt_decode(body.token);
}

export const logout = () => {
	localStorage.removeItem('auth_token');
	user.setIsAuth(false);
}