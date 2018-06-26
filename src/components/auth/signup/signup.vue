<script>
export default {
  name: 'signup',
  template: require('./signup.html'),
  data () {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    onSubmit () {
      const formData = {
        username: this.username,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword
      }
      this.$store.dispatch('signup', formData)
    }
  }
}
</script>
