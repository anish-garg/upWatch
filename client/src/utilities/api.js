import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8000/api/user"
})

export const createUser = async (formData) => {
    try {
        const response = await api.post("/register", formData);

        const { token, user } = response.data;

        // Store the JWT token
        if (token) {
            localStorage.setItem("authToken", token);

            // Set default authorization header for future requests
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }

        // Store user data for navbar display
        if (user) {
            localStorage.setItem("userData", JSON.stringify(user));
        }
        return response.data;
    } catch (error) {
        console.error("API Error:", error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};

export const monitorSite = async (id) => {
    try {
        const response = await api.get(`/monitor/${id}`)
        if (response.status === 400 || response.status === 500) {
            throw response.data;
        }
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const createMonitor = async (id) => {
    try {
        const response = await api.post(`/monitoring/${id}/createMonitor`)
        if (response.status === 400 || response.status === 500) {
            throw response.data;
        }
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const userSignin = async (email, password) => {
    try {
        // No need of using json stringify because in axios like library response is already parsed in json
        const response = await api.post("/login", {
            email,
            password
        });
        const { token, user } = response.data;

        // Store the token in localStorage for future authenticated requests
        if (token) {
            localStorage.setItem("authToken", token);

            // Configure default Authorization header for all future requests
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }

        // Store user data if available
        if (user) {
            localStorage.setItem("userData", JSON.stringify(user));
        } else {
            console.warn("No user data received from login API");
        }

        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
