<script>
import { APIENDPOINT } from '@/api.config'
import axios from 'axios'
export default {
  name: 'login',
  template: require('./login.html'),
  data () {
    return {
      loginDetails: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login (value) {
      try {
        const response = await axios({
          method: 'post',
          url: APIENDPOINT + 'api/v1/auth/login/',
          data: value
        })
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    },
    loginUser: function () {
      console.log(this.login(this.loginDetails))
    }
  }
}
</script>
