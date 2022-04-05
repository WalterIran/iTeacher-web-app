import axios from 'axios';

const BASE_URL = `${process.env.REACT_APP_API_URL}/api/v1`;

export default axios.create({
    baseURL: BASE_URL,
    headers: { 
        'Content-Type': 'application/json',
        'cache-control': 'no-cache'
    },
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'cache-control': 'no-cache'
    },
    withCredentials: true
});

//Provisional
export const setJWT = ( jwt ) => {
    axiosPrivate.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
}