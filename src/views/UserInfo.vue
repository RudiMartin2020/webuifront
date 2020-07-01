<template>
  <b-card class="w-100">
    <b-card-text>
      <UserAdd/>
    </b-card-text>
      <hr/>
    <b-card-body class="border">
      <UserList/>
    </b-card-body>
  </b-card>
</template>

<script>
import { mapActions } from 'vuex'
import UserAdd from '@/components/UserAdd.vue'
import UserList from '@/components/UserList.vue'

export default {
  created() {
    this.selectUsers()
  },
  components: {
    UserAdd,
    UserList
  },
  methods: {
    ...mapActions(['selectUsers'])
  }
}
</script>

<style>

</style>