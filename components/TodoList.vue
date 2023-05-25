<template>
    <div>
        <to-do
         v-for="(todo,index) in todos"
        :key="index"
        :todo="todo"
        :index="index"
        />
    </div>
</template>

<script>
/*
    usando mapState para cargar el estado 'todos', el array con las tareas (computed)...
    el nombre de la propiedad es como vamos a llamar al estado en el contexto de este componente
    y el valor es la propiedad de state declarada en el store.js
*/
import { mapState } from 'vuex';
import ToDo from './ToDo.vue';
    export default {
        name:'todo-list',
        components:{
            ToDo
        },
        computed:{
            ...mapState({
                todos:'todos'
            }),
        }
    }
</script>

<style>

</style>