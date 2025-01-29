import axios from "axios";

export const axiosGoldInstance = axios.create({
    baseURL: `${import.meta.env.VITE_REACT_GOLD_BASE_URL}/api/`,
});

// Add interceptors to include custom headers
axiosGoldInstance.interceptors.request.use(
    (config) => {
        // Add custom headers
        console.log(import.meta.env.VITE_GOLD_API_KEY);
        
        config.headers['x-access-token'] = `${import.meta.env.VITE_GOLD_API_KEY}`;
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    (error) => {
        // Handle request errors
        return Promise.reject(error);
    }
);

// Optional: Add a response interceptor if needed
axiosGoldInstance.interceptors.response.use(
    (response) => {
        // Process the response data if needed
        return response;
    },
    (error) => {
        // Handle response errors
        return Promise.reject(error);
    }
);
