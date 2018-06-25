<script>
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
    loginUser: function () {
      console.log(this.loginDetails)
    }
  }
}
</script>
