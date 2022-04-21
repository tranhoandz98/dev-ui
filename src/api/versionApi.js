import axiosClient from "./axiosClient";

const PREFIX_URL = "crm/phien-ban";

const versionApi = {
  getActiveVersion: (params) => {
    const url = `${PREFIX_URL}/getActiveVersion`;
    return axiosClient.get(url, { params });
  },
  getById: (params) => {
    const url = `${PREFIX_URL}/getById`;
    return axiosClient.get(url, { params });
  },
  getAllByFilter: (params) => {
    const url = `${PREFIX_URL}/getAllByFilter`;
    return axiosClient.get(url, { params });
  },
}

export default versionApi;
