import { fetchDeseaseById, fetchDeseases, fetchMedicationById, fetchMedications } from "./http/index.js"
import deseasePage from "./components/deseasePage.js";
import deseasesPage from "./components/deseasesPage.js";
import authPage from "./components/authPage.js";
import userPage from "./components/userPage.js";
import medicationPage from "./components/medicationPage.js";
import medicationsPage from "./components/medicationsPage.js";
import favoritesPage from './components/favoritesPage.js';
import { user } from '../src/app.js'
import { check } from './http/userApi.js'

export default {
	async deseasesRoute(params) {
		if (params.id) {
			const desease = await fetchDeseaseById(params.id);
			deseasePage.render(desease);
		} else {
			const deseases = await fetchDeseases();
			deseasesPage.render(deseases);
		}
	},

	async medicationsRoute(params) {
		if (params.id) {
			const medication = await fetchMedicationById(params.id);
			medicationPage.render(medication);
		} else {
			const medications = await fetchMedications();
			medicationsPage.render(medications);
		}
	},

	async userRoute() {
		check().then(data => {
			user.setUser(data);
			user.setIsAuth(true);
			userPage.render(user);
		}).catch(() => location = '#auth');
	},

	authRoute() {
		authPage.render();
	},

	async favoritesRoute(params) {
		//const favorites = await fetchMedications();
		favoritesPage.render({});
	},
}