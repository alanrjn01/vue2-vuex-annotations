<template>
    <div>
        <span>add task </span>
        <input type="text"
        v-model="newTodoItem"/>
        <button @click="addNewTodoItem()">submit</button>
    </div>
</template>

<script>
/*
    en este caso decido utilizar el action de forma tradicional. Para eso
    creo la función de forma tradicional en la propiedad methods, para dentro utilizar un dispatch,
    llamar al action y pasarle por argumento el nuevo item a insertar. no utilizo ningun map
    ya que en la funcion, voy a limpiar el input luego de utilizar el action.
*/
    export default {
        name:'todo-form',
        data(){
            return{
                newTodoItem:""
            }
        },
        methods:{
            addNewTodoItem(){
                this.$store.dispatch('addNewTodoAction',this.newTodoItem)
                this.newTodoItem = ''
            }
        }
    }
</script>

<style>

</style>