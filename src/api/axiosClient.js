import axios from 'axios';
import keycloak from 'keycloak';
import queryString from 'query-string';
import { logout } from 'redux/actions/myactions/logout';
import { store } from 'redux/storeConfig/store';
import Swal from 'sweetalert2';
import { loading } from "utility/loading/Loading";

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
  loading.runLoadingBlockUI();
  const token = keycloak.authenticated ? keycloak.token : "";

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosClient.interceptors.response.use((response) => {
  loading.stopRunLoading();
  if (response && response.data) {
    return response.data;
  }

  return response;
}, (error) => {

  // Handle errors
  loading.stopRunLoading();

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
      store.dispatch(logout());
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
