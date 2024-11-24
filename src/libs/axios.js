import router from '@/router';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.smartunlocker.site/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status === 403 && error.response.data.status === 'user_is_not_enabled') {
            localStorage.removeItem('token');
            router.push({ name: 'login' });


        }
        return Promise.reject(error);
    }
);

export default api;