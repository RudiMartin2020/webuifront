<template>
  <b-card class="w-100">
    <b-card-text>
      <AddTodo/>
    </b-card-text>
      <hr/>
    <b-card-body class="border">
      <TodoList/>
    </b-card-body>
  </b-card>
</template>

<script>
import { mapActions } from 'vuex'
import AddTodo from '@/components/AddTodo.vue'
import TodoList from '@/components/TodoList.vue'

export default {
  created() {
    this.getTodos()
  },
  components: {
    AddTodo,
    TodoList
  },
  methods: {
    ...mapActions(['getTodos'])
  }
}
</script>

<style>

</style>