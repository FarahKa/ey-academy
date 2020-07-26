import axios from 'axios';

export default axios.create ({
    baseURL: 'http://192.168.1.8:5005/api',
    //baseURL: 'http://172.220.142.3:5005/api'
    //baseURL: 'http://172.20.10.14:5005/api' fahd
});

export const images = axios.create({
    baseURL: 'https://randomuser.me/api'
})