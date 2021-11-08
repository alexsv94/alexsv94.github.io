import { check } from "./http/userApi.js";
import UserStore from "./store/userStore.js";
import router from './router.js';

export const user = new UserStore();

check().then(data => {
	user.setUser(data);
	user.setIsAuth(true);
}).catch(e => console.log(e.message));

router.init();