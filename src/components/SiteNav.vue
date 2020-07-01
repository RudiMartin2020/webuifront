<template>
  <b-navbar toggleable="lg" type="dark" variant="info" class="font-weight-bold">
    <b-navbar-brand to="/">{{title}}</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/todo">Todo</b-nav-item>
        <b-nav-item to="/userinfo">UserInfo</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
      </b-navbar-nav>
    </b-collapse>

    <b-button v-b-toggle.sidebar1 variant="info" >
      <b-icon-three-dots-vertical/>
    </b-button>
  </b-navbar>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style>
</style>