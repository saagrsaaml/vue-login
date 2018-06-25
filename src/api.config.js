export const APIENDPOINT = 'http://localhost:8000/'

export const getHeader = function () {
  const tokenData = JSON.parse(window.localStorage.getItem('token'))
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer' + tokenData.access_token
  }
  return headers
}
