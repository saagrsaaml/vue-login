<script>
export default {
  template: require('./dashboard.html'),
  name: 'admin',
  beforeMount () {
    this.$store.dispatch('getUserList')
  }
}
</script>
