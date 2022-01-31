const requestConfig = {
  url: "",
  method: "get",
  baseURL: "",
  transformRequest: [
    function transformRequest(data) {
      return data;
    },
  ],
  transformResponse: [
    function transformResponse(data) {
      return JSON.parse(data);
    },
  ],
  headers: {},
  params: {},
  timeout: 330000,
  withCredentials: false,
  responseType: "json",
  maxContentLength: 50000,
  validateStatus(status) {
    return status >= 200 && status < 300;
  },
  maxRedirects: 5,
};
export default requestConfig;
