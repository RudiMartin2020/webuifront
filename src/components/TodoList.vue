<template>
  <div>
    <tr>
      <td>
       <Todo v-for="todo in todos" :key="todo.id" :todo="todo" />
      </td>
      <td>
       <Todo v-for="todo in todos" :key="todo.id" :todo="todo" />
      </td>
     
    </tr>


    
  </div>
</template>

<script>
import Todo from '@/components/Todo.vue'

export default {
  components: {
    Todo
  },
  computed: {
    todos() {
      return this.$store.state.todos
    }
  }
}
</script>

<style>

</style>