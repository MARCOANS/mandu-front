// /src/services/Api.ts
import config from '../config/app'

import * as API from '../utils/Api-helper'

const {isProd} = config
const API_ENDPOINT = isProd ? config.production.api_endpoint : config.development.api_endpoint
// example GET API request

const apiConfig = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
}

export const list = () => {
  return API.get(`${API_ENDPOINT}/division`)
}

export const create = (data) => {
  return API.post(`${API_ENDPOINT}/division`, data, apiConfig)
}
