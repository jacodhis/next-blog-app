import axios from 'axios';
import Cookies from 'js-cookie';
import { logOutUserHandler } from '@/context/AuthContext';

// Create an Axios instance with custom configuration
const apiClient = axios.create({
    baseURL: 'https://api.example.com', // Replace with your API base URL
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add a request interceptor to include the Authorization token
apiClient.interceptors.request.use(
    config => {
        const token = Cookies.get('authToken') ; 
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// Optionally, you can add a response interceptor
apiClient.interceptors.response.use(
    response => response,
    error => {
        // Handle error, e.g., logout user if token is invalid
        if (error.response && error.response.status === 401) {
           logOutUserHandler() // logout user
        }
        return Promise.reject(error);
    }
);

export default apiClient;
