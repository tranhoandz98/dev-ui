import axiosClient from "./axiosClient";

const PREFIX_URL = "crm/tai-khoan";

const userApi = {
  getList: (params) => {
    const url = `${PREFIX_URL}/index`;
    return axiosClient.get(url, params);
  },
  getUserInfo: (params) => {
    const url = `${PREFIX_URL}/getUserInfo`;
    return axiosClient.get(url, params);
  },
}

export default userApi;
