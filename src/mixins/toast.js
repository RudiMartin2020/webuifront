const toast = {
  methods: {
    makeToast(obj, message) {
      obj.$bvToast.toast(message, {
        toaster: 'b-toaster-top-center',
        autoHideDelay: 1000,
        appendToast: false,
        noCloseButton: true
      })
    }
  },
}
export default toast