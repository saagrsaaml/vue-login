<script>
export default {
  name: 'signin',
  template: require('./signin.html'),
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit () {
      const formData = {
        username: this.username,
        password: this.password
      }
      console.log(formData)
      this.$store.dispatch('signin', {username: formData.username, password: formData.password})
    }
  }
}
</script>
