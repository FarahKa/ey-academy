import axios from 'axios';

export default axios.create ({
    baseURL: 'http://IP:5005/api',
});

export const images = axios.create({
    baseURL: 'https://randomuser.me/api'
})