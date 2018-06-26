import axios from 'axios'
import { app } from './app.config'

export const $http = axios.create({
  baseURL: app.APIENDPOINT
})
