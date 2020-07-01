<template>
  <div class="mb-3 d-flex">
    <b-input-group size="lg" 
      :prepend="userinfo.user_id"
      :append="userinfo.create_dtts | moment('YYYY-MM-DD HH:mm:ss')"
    >
      <b-form-input class="ml-2" readonly v-model="userinfo.user_name" 
        @focus="enable" @blur="disable" @keyup.enter="save"/>
        <b-form-input class="ml-2" readonly v-bind ="userinfo.last_update_dtts"  
        @focus="disable" @blur="disable" />

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
    userinfo: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['deleteUser', 'insertUser', 'sendwait']),
    enable(e) {
      e.target.readOnly = false
    },
    disable(e) {
      e.target.readOnly = true
    },
    remove() {
      this.deleteUser(this.userinfo.user_id)
      this.makeToast(this.$parent, `ID ${this.userinfo.user_id}이 삭제되었습니다.`)
    },
    save(e) {
      this.updateUser(this.userinfo)
      this.makeToast(this.$parent, `ID ${this.userinfo.user_id}이 수정되었습니다.`)
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