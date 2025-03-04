import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8000/api/user"
})

export const createUser = async () => {
    try {
        const response = await api.post("/register");
        if (response.status === 400 || response.status === 500) {
            throw response.data;
        }
        return response.data;
    } catch (error) {
        console.log(error);
        throw error
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