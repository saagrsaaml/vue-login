<script>
export default {
  name: 'frmInput',
  template: require('./input.html'),
  props: ['value'],
  methods: {
    updateCode (code) {
      this.$emit('input', code)
    }
  }
}
</script>
