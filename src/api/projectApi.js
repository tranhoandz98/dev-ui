import axiosClient from "./axiosClient";

const PREFIX_URL = "crm/project";

const projectApi = {
  getList: (params) => {
    const url = `${PREFIX_URL}/index`;
    return axiosClient.get(url, params);
  },
  getById: (params) => {
    const url = `${PREFIX_URL}/getById`;
    return axiosClient.get(url, { params });
  },
  getAll: (params) => {
    const url = `${PREFIX_URL}/getAll`;
    return axiosClient.get(url, params);
  },
}

export default projectApi;
