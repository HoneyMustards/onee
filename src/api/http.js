import axios from 'axios'

export const SERVICE_BASE_URL = process.env.API_BASE_URL
export const HTTP = axios.create({ baseURL: SERVICE_BASE_URL })

function successHandler(response) {
  if (response.data != null) {
    return response.data
    return {
      data: response.data.data,
      message: response.data.error,
      meta: response.data.meta,
    }
  } else {
    return Promise.reject(false)
  }
}

function errorHandler(error) {
  if (error.response !== undefined) {

    return Promise.reject(false)
  }
}

HTTP.interceptors.request.use(config => config);

HTTP.interceptors.response.use(response => successHandler(response), error => errorHandler(error));