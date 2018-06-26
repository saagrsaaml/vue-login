import axios from 'axios'
import app from './app.config'

const $http = axios.create({
  baseURL: app.APIENDPOINT
})

export default $http
