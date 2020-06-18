<template>
  <div class="mb-3 d-flex">
    <b-input-group size="lg" 
      :prepend="todo.id.toString()"
      :append="todo.createAt | moment('YYYY-MM-DD HH:mm:ss')"
    >
      <b-form-input class="ml-2" readonly v-model="todo.text" 
        @focus="enable" @blur="disable" @keyup.enter="save"/>
      <b-button class="ml-2" variant="danger" @click="remove">Del</b-button>
      <b-button class="ml-2 mr-2" variant="secondary" @click="doSendwait">SendWait</b-button>
    </b-input-group>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import toast from '@/mixins/toast.js'

export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['removeTodo', 'saveTodo', 'sendwait']),
    enable(e) {
      e.target.readOnly = false
    },
    disable(e) {
      e.target.readOnly = true
    },
    remove() {
      this.removeTodo(this.todo.id)
      this.makeToast(this.$parent, `ID ${this.todo.id}이 삭제되었습니다.`)
    },
    save(e) {
      this.saveTodo(this.todo)
      this.makeToast(this.$parent, `ID ${this.todo.id}이 수정되었습니다.`)
      e.target.blur()
      e.target.readOnly = true
    },
    doSendwait() {
      this.sendwait(this.todo).then((data)=>
        this.makeToast(this.$parent, `${data.text}`)
      )
    }
  },
  mixins: [ toast ]
}
</script>

<style>

</style>