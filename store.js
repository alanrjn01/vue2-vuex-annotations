import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/*creo mi store global para poder acceder a ella desde cualquier componente de vue

 -> state: guarda estados de mi aplicación (en este ejemplo guarda el array de 'todos')

 -> getters: sirve para poder obtener valores de alguna operación realizada con el estado

 -> actions: las acciones mandan a llamar con el metodo commit a la mutación que se va a
  ... encargar de aplicar lógica de negocio y trabajar con los datos traídos de los componentes

 -> mutations: las mutaciones tienen la lógica de negocio y son las que realizan alteraciones
  ... en el estado

  -- Desde los componentes, es recomendado acceder a las actions y no a las mutation, para eso están
  definidas de dicha forma. Para trabajar más cómodamente con estas propiedades del objeto store,
  se utiliza 'mapState', 'mapGetter' y 'mapAction'

*/
export default new Vuex.Store({
    state:{
        todos:[
            {title: 'item a', completed:false, id:0, active:true},
            {title: 'item b', completed:false, id:1, active:true},
            {title: 'item c', completed:false, id:2, active:true},
        ]
    },
    getters:{
        completedTodosCount(state){
            return state.todos.filter(todo => todo.completed===true).length
        }
    },
    actions:{
        addNewTodoAction({commit},todoItem){
            commit('NEW_TODO', todoItem)
        },
        completeToDoAction({commit},todoItem){
            commit('COMPLETE_TODO',todoItem)
        },
        deleteToDoAction({commit},todoItem){
            commit('DELETE_TODO',todoItem)
        }
    },
    mutations:{
        NEW_TODO(state,todoItem){
            state.todos.push({
                title:todoItem,
                completed:false,
                id: state.todos[state.todos.length-1].id +1,
                active:true
            })
        },
        COMPLETE_TODO(state,todoItem){
            todoItem.completed= !todoItem.completed   
        },
        DELETE_TODO(state,todoItem){
            state.todos.filter(todo=>{
                if (todo.id=== todoItem.id){
                    todo.active = false
                }
            })
        }
    }
})