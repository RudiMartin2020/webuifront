<template>
  <div>
    <input class="w-100 p-2" type="text" placeholder="Input USERID"
      @keyup.enter="add"
      v-model="text"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import toast from '@/mixins/toast.js'

export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    ...mapActions(['insertUser']),
    add() {
      this.insertUser({text: this.text})
      this.makeToast(this, `추가되었습니다.`)
      this.text = ''
    }
  },
  mixins: [toast]
}
</script>

<style>

</style>