import axiosClient from "./axiosClient";

const PREFIX_URL = "crm/quan-ly-api";

const apiManagerApi = {
  getById: (params) => {
    const url = `${PREFIX_URL}/getById`;
    return axiosClient.get(url, { params });
  },
}

export default apiManagerApi;
