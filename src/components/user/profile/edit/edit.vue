<script>
import { mapGetters } from 'vuex'
export default {
  template: require('./edit.html'),
  name: 'edit',
  props: ['id'],
  data () {
    return {
      email: '',
      username: '',
      salutation: 'Mix',
      first_name: '',
      last_name: '',
      gender: ''
    }
  },
  watch: {
    id: function () {
      this.getUser()
    }
  },
  beforeMount () {
    this.getUser()
  },
  computed: {
    ...mapGetters([
      'authUser'
    ])
  },
  methods: {
    getUser () {
      this.$store.dispatch('getAuthUser', this.id)
      let user = this.$store.getters.authUser
      this.email = user.email
      this.username = user.username
      this.first_name = user.first_name
      this.last_name = user.last_name
    },
    async onSubmit () {
      const data = {
        userid: this.id,
        formData: {
          username: this.username,
          email: this.email,
          salutation: this.salutation,
          first_name: this.first_name,
          last_name: this.last_name,
          gender: this.gender
        }
      }
      console.log(data)
      this.$store.dispatch('updateAuthUser', data)
    }
  }
}
</script>
