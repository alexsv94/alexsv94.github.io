import { SERVER_API } from "../consts.js"
import { commonRequest } from "./requestTypes.js";

export const fetchDeseases = async () => {
	const body = await commonRequest(SERVER_API + '/deseases');
	return body;
};

export const fetchMedications = async () => {
	const body = await commonRequest(SERVER_API + '/medications');
	return body;
};

export const fetchDeseaseById = async (id) => {
	const body = await commonRequest(SERVER_API + '/deseases/' + id);
	return body;
};

export const fetchMedicationById = async (id) => {
	const body = await commonRequest(SERVER_API + '/medications/' + id);
	return body;
};

