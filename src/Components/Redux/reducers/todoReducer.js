import React from 'react'
import { ADD_TODO, DELETE_TODO, GET_TODOS, UPDATE_TODO } from '../actions/todoActions'

const intialState={
  todos:[],
}
const  todoReducer=(state=intialState,action)=> {
    switch(action.type){
        case GET_TODOS:
          return {...state,todos:action.payload}
        case ADD_TODO: 
          return {...state,todos:action.payload}
        case UPDATE_TODO:
          return {...state,todos:state.todos.map((todo)=>todo.id===action.payload.id ? action.payload:todo)}
        case DELETE_TODO:
          return{...state ,todos:state.todos.filter((todo)=>todo.id!==action.payload)};
        default :
          return state
    }
 
}
export default  todoReducer