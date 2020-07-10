<template>
  <div>
    <!-- <wj-flex-grid :items-source="users"></wj-flex-grid> -->

    <div class="container-fluid">
        <p v-html="selectedItem"></p>
        <wj-flex-grid :itemsSource="data" :initialized="flexInitialized">
            <wj-flex-grid-column :header="'USER_ID'" :binding="'userinfo.user_id'" width="2*" />
            <wj-flex-grid-column :header="'USER_NAME'" :binding="'userinfo.user_name'" width="*" format="n2" />
            <wj-flex-grid-column :header="'CREATE_DTTS'" :binding="'userinfo.create_dtts'" width="*" format="n2" />
        </wj-flex-grid>
    </div>

    <UserAction
      v-for="userinfo in users"      :key="userinfo.user_id"      :userinfo="userinfo"
    />    
    
  </div>
  

</template>

<script>

import UserAction from '@/components/UserAction.vue'
import '@grapecity/wijmo.vue2.grid'


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