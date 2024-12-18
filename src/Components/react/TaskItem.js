import {useDispatch} from 'react-redux'
import { deleteTodo, updateTodo } from '../Redux/actions/todoActions';

const TaskItem=({todo})=> {
    const dispatch=useDispatch();
       const handleDelete=()=>{
        dispatch(deleteTodo(todo.id))
    }
       const handleUpdate=()=>{
        const updatedTodo={
          ...todo,
          completed:!todo.completed
        };
      dispatch(updateTodo(todo.id, updatedTodo))
    }
  return (
  
        <div>
          <p>{todo.title}</p>
          <button onClick={handleUpdate} >{todo.completed? 'Undo':'Completed'}</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
   
 
  )
}
export default TaskItem