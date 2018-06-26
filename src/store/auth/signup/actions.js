import { $http } from '@/axios.auth.js'
import router from '@/router/'

const signin = async ({commit, dispatch}, authData) => {
  try {
    const data = {
      username: authData.username,
      password: authData.password
    }
    const response = await $http({
      method: 'post',
      url: '/api/v1/auth/login/',
      data: data
    })
    if (response.status === 200) {
      localStorage.setItem('token', response.data.token)
    } else {
      router.replace('/login')
    }
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}
export default {
  signin
}
