import axios from 'axios';
import keycloak from 'keycloak';
import queryString from 'query-string';
import Swal from 'sweetalert2';

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  timeout: 40000,
  headers: {
    'content-type': 'application/json',
    "X-Requested-With": "XMLHttpRequest",
  },
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  const token = keycloak.authenticated ? keycloak.token : "";

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }

  return response;
}, (error) => {

  // Handle errors

  const response = error.response;
  if (response && response.status === 401) {
    if (response?.data?.status === 401) {
      Swal.fire({
        title: "Error",
        text: response?.data?.message ?? error.message,
        icon: "error",
        dangerMode: false
      });
    } else {
      keycloak.logout();
    }
    return
  }
  Swal.fire({
    title: "Error",
    text: error.message,
    icon: "error",
    dangerMode: false
  });
  throw error;
});

export default axiosClient;
