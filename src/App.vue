<template>
  <div id="app">
    <site-nav :title="title"/>
    <site-sidebar/>
    <div class="container-fluid">
      <router-view class="mt-3"/>
    </div>
  </div>
</template>

<script>
import SiteNav from '@/components/SiteNav.vue'
import SiteSidebar from '@/components/Sidebar.vue'

export default {
  components: {
    SiteNav,
    SiteSidebar
  },
  data() {
    return {
      title: 'DEMO'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
