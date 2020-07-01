<template>
  <div>
    <UserAction
      v-for="userinfo in users"      :key="userinfo.user_id"      :userinfo="userinfo"
    />
  </div>
</template>

<script>
import UserAction from '@/components/UserAction.vue'

export default {
  components: {
    UserAction
  },
  computed: {
    users() {
      return this.$store.state.users
    }
  }
}
</script>

<style>

</style>