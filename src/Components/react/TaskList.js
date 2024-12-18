import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import TaskItem from './TaskItem';
import { addTodo, getTodos } from '../Redux/actions/todoActions';


const TaskList=() =>{
    const dispatch =useDispatch();
    const todos=useSelector((state)=>state.todos.todos )
    const [newTask,setNewTask]=useState("")
      useEffect(()=>{
      dispatch(getTodos())
    },[dispatch])
    const handleAddTodo=(e)=>{
      e.preventDefault();
      if (newTask.trim()!=='')
        dispatch(addTodo({title:newTask,completed:false}))
        setNewTask('')
    }
  return (
    <div>
      <form onSubmit={handleAddTodo}>
      <h2>Liste des taches </h2>
        <input type='text' value={newTask} onChange={(e)=>setNewTask(e.target.value)} placeholder='Add new task'/>
      </form>
        
        {todos.map((todo)=>(
             <TaskItem key={todo.id} todo={todo}/>))}
    </div>
  )
}
export default TaskList;