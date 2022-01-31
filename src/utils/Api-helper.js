// utils/API.js

import axios from "axios";
import requestConfig from "../config/request";

import store from "../redux/store";





export const getCustomError = (err) => {
  let error = {
    message:  "An unknown error occured" 
  };
  if (err.response
    && err.response.data
    ) { 
    error.code = err.response.data.error;
    error.message = err.response.data.message;
    
  } else if (!err.response && err.message) {
    error.message = err.message;
  }

  if (err.message === "Network Error"){
    error.message = "Network Error";
  }
  return error;
  
};
export const getFromLocalStorage = async (key) => {
  try {
    const serializedState = await localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
export const saveToLocalStorage = async (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    await localStorage.setItem(key, serializedState);
  } catch (err) {
    // Ignoring write error as of now
  }
};
export const clearFromLocalStorage = async (key) => {
  try {
    await localStorage.removeItem(key);
    return true;
  } catch (err) {
    return false;
  }
};
async function getRequestConfig(apiConfig) {
  let config = Object.assign({}, requestConfig);
  
  if (apiConfig) {
    config = Object.assign({}, requestConfig, apiConfig);
  }


  //store.getState().whatEver;
  if (store.getState().user) {
    config.headers["Authorization"] = `Bearer ${store.getState().user.accessToken}`;
  }
  return config;
}
export const get = async (url, params, apiConfig) => {
  const config = await getRequestConfig(apiConfig);
  config.params = params;
  const request = axios.get(url, config);
  return request;
};
export const post = async (url, data, apiConfig) => {
  const config = await getRequestConfig(apiConfig);
  let postData = {};
  if (
    apiConfig &&
    apiConfig.headers &&
    apiConfig.headers["Content-Type"] &&
    apiConfig.headers["Content-Type"] !== "application/json"
  ) {
    postData = data;
    axios.defaults.headers.post["Content-Type"] =
      apiConfig.headers["Content-Type"];
  } else {
    postData = JSON.stringify(data);
    axios.defaults.headers.post["Content-Type"] = "application/json";
  }
  const request = axios.post(url, postData, config);
  return request;
};
export const put = async (url, data) => {
  const config = await getRequestConfig();
  config.headers["Content-Type"] = "application/json";
  const request = axios.put(url, JSON.stringify(data), config);
  return request;
};
export const patch = async (url, data) => {
  const config = await getRequestConfig();
  config.headers["Content-Type"] = "application/json";
  const request = axios.patch(url, JSON.stringify(data), config);
  return request;
};
export const deleteResource = async (url) => {
  const config = await getRequestConfig();
  const request = axios.delete(url, config);
  return request;
};