import { $http } from '@/axios.auth.js'
import router from '@/router/'

const signup = async ({commit, dispatch}, authData) => {
  try {
    const data = {
      email: authData.email,
      password: authData.password,
      password_again: authData.confirmPassword,
      username: authData.username
    }
    const response = await $http({
      method: 'post',
      url: '/api/v1/auth/signup/',
      data: data
    })
    if (response.status === 201) {
      router.replace('/login')
    } else {
      router.replace('/signin')
    }
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}
export default {
  signup
}
