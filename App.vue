<template>
  <div id="app">
    <h1>To do List</h1>
    <img alt="cat" src="https://i.imgur.com/ExkY2X9.png">
    <h2>Completed 'to do': {{ completedTodosCount }}</h2>
    <hr>
    <todo-list/>
    <hr>
    <todo-form/>
  </div>
</template>

<script>
/*
    usando mapGetters para cargar los getters (computed)...
    Lo mismo, aca traemos los getters para utilizarlos directamente sin tener que acceder a store.js
*/
import TodoList from './components/TodoList.vue';
import TodoForm from './components/TodoForm.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    TodoList,
    TodoForm
  },
  computed:{
    ...mapGetters({
      completedTodosCount:'completedTodosCount'
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
