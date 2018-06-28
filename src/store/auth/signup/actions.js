import { $http } from '@/axios.auth.js'
import router from '@/router/'
import { app } from '@/app.config'

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
      url: app.SIGNUP,
      data: data
    })
    if (response.status === 201) {
      router.replace('/signin')
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
