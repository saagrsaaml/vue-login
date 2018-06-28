<script>
import { mapGetters } from 'vuex'
export default {
  template: require('./home.html'),
  name: 'user',
  computed: {
    ...mapGetters([
      'authUser'
    ])
  }
}
</script>
