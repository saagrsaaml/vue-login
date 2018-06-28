import { $http } from '@/axios.auth.js'
import router from '@/router/'
import { app } from '@/app.config'

const signin = async ({commit, dispatch}, authData) => {
  try {
    const data = {
      username: authData.username,
      password: authData.password
    }
    const response = await $http({
      method: 'post',
      url: app.SIGNIN,
      data: data
    })
    if (response.status === 200) {
      localStorage.setItem('token', JSON.stringify(response.data.token))
      commit('authUser', {
        token: response.data.token,
        userId: response.data.user_id,
        first_name: response.data.first_name,
        last_name: response.data.last_name,
        username: response.data.username,
        email: response.data.email
      })
      router.replace('/dashboard')
    } else {
      router.replace('/signin')
    }
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

const logout = ({commit, dispatch}) => {
  commit('clearAuthData')
  localStorage.removeItem('token')
  router.replace('/signin')
}

const tryAutoLogin = ({commit}) => {
  const token = localStorage.getItem('token')
  if (!token) {
    return
  }
  const userId = localStorage.getItem('token')
  commit('authUser', {
    token: token,
    userId: userId
  })
}
export default {
  signin,
  logout,
  tryAutoLogin
}
