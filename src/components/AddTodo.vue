<template>
  <div>
    <tr>
      <td>user_id
    <input class="w-100 p-2" type="text" placeholder="Input user_id"
      @keyup.enter="add"
      v-model="text"
    />
    </td>
    <td>
    user_name
    <input class="w-100 p-2" type="text" placeholder="Input todo"
      @keyup.enter="add"
      v-model="text"
    />    
      </td>
    </tr>

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
    ...mapActions(['addTodo']),
    add() {
      this.addTodo({text: this.text})
      this.makeToast(this, `추가되었습니다.`)
      this.text = ''
    }
  },
  mixins: [toast]
}
</script>

<style>

</style>