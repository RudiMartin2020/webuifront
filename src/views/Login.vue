<template>
  <b-container class="d-flex justify-content-center">
    <b-card title="Login" style="max-width: 30%">
      <b-input-group prepend="Username" class="p-2">
        <b-form-input type="text" v-model="username"/>
      </b-input-group>
      <b-input-group prepend="Password" class="p-2">
        <b-form-input type="password" v-model="password"/>
      </b-input-group>
      <b-input-group size="20px" class="d-flex justify-content-center p-2">
        <b-button variant="primary" @click="submit">
          login
        </b-button>
      </b-input-group>
    </b-card> 
  </b-container>
</template> 

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      username: '',
      password: '',
      ip: '10.150.2.116',
      system: '9A949AD8F9D743F985E0E059B736162B',
      msg: ''
    } 
  },
  methods: {
    ...mapActions(['login']),
    submit() {
      this.login({
        username: this.username, 
        password: this.password,
        ip: this.ip, system: this.system
      }).then(this.$router.push({path: '/'}))
    }
  },
}
</script>

<style>

</style>