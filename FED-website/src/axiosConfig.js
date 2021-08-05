import axios from 'axios';

/* API CONFIG */
export const API_URI = 'http://15.206.221.177:4001';

const errorHandler = (error) => {
    return Promise.reject({
        ...error.response.data
    })
}

const successHandler = (response) => { 
    return response.data;
}

export const axiosInstance = axios.create({
    baseURL: API_URI
})

axiosInstance.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
)
