import axios from "axios";

// Set config defaults when creating the instance
 export const instance = axios.create({
    // baseURL: 'https://jsonplaceholder.typicode.com'
    baseURL: 'https://user-go.lit.it'
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem('jwt');
    console.log('token', token)
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });



//   Get REquest through interceptor

export const getClientData = (endpoint: string) => {
    const result = instance.get(endpoint);
    return result;
}