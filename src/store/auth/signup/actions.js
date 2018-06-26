const signup = ({commit, dispatch}, authData) => {
  axios.post('/signupNewUser?key=AIzaSyCXlVPPWknVGhfc60mt7Jkv0Xzrho7_mwc', {
    email: authData.email,
    password: authData.password,
    returnSecureToken: true
  })
    .then(res => {
      console.log(res)
      commit('authUser', {
        token: res.data.idToken,
        userId: res.data.localId
      })
      const now = new Date()
      const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
      localStorage.setItem('token', res.data.idToken)
      localStorage.setItem('userId', res.data.localId)
      localStorage.setItem('expirationDate', expirationDate)
      dispatch('storeUser', authData)
      dispatch('setLogoutTimer', res.data.expiresIn)
    })
    .catch(error => console.log(error))
}


export default {
  signup
}
