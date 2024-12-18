import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../Redux/actions/todoActions';

const TaskForm =()=> {
    const [title,setTitle]=useState('')
    const dispatch=useDispatch();
     const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addTodo())
     }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <h1>TaskForm</h1>
        <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='new task'/>
        </form>
        
    </div>
  )
}
export default TaskForm;