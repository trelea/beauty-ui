import axios from "axios";

const axiosApi = axios.create({
	baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api/v1",
	withCredentials: true,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

export default axiosApi;
