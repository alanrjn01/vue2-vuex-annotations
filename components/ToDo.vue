<template>
    <div v-if="todo.active">
            <p :class="{completed:todo.completed}"> <strong>{{ todo.title }}</strong></p>
            <button
                v-if="!todo.completed"
                @click="completeToDo(todo)"
            >✅</button>
            <button
                @click="deleteToDo(todo)"
            >❌</button>
    </div>
</template>

<script>
/*
    usando mapActions para cargar las acciones (methods)...
    el nombre de la propiedad es como vamos a llamar a la accion en el contexto de este componente
    y el valor es el action declarado en el store.js
*/
import { mapActions } from 'vuex';
    export default {
        name:'to-do',
        props:{
            todo:{},
            index:Number
        },
        methods:{
            ...mapActions({
                completeToDo:'completeToDoAction',
                deleteToDo:'deleteToDoAction'
            })
        }
    }
</script>

<style>
.completed{
    text-decoration: line-through;
    color: green;
}
</style>