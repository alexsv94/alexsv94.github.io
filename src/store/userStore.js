export default class UserStore {
	constructor() {
		this._isAuth = false
		this._user = {}
		this._user.role = 'USER'
	}

	setIsAuth(bool) {
		this._isAuth = bool;
	}

	setUser(user) {
		this._user = user;
	}

	get isAuth() {
		return this._isAuth;
	}

	get user() {
		return this._user;
	}
}