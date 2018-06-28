import axios from 'axios'
import { app } from './app.config'

const getHeader = () => {
  const tokenData = JSON.parse(window.localStorage.getItem('token'))
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Token ' + tokenData
  }
  return headers
}

export const $http = axios.create({
  baseURL: app.API_DEV,
  ...(window.localStorage.getItem('token') ? { headers: getHeader() } : {})
})
