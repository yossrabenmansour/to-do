import axios from 'axios';
//API_URL
const API_URL= 'https://jsonplaceholder.typicode.com/todos';

//Action types

export const GET_TODOS='GET_TODOS';
export const ADD_TODO='ADD_TODO';
export const UPDATE_TODO='UPDATE_TODO';
export const DELETE_TODO='DELETE_TODO';


//Get todos
export const getTodos=()=>async (dispatch)=>{
  try{
    const response=await 
      axios.get(API_URL);
        dispatch({type :ADD_TODO,payload:response.data});
  }catch(error){console.error(error)}
}
//Add to do 
export const addTodo=(todo)=> async(dispatch)=>{
  try {
    const response=await
    axios.post(API_URL,todo);
      dispatch({type:ADD_TODO,payload:response.data})
  }catch(error){console.error(error)}
}
//Update to do 
export const updateTodo=(id,updateTodo)=> async (dispatch)=>{
  try {
    const response=await 
    axios.put(`${API_URL}/${id}`,updateTodo)
      dispatch({type:UPDATE_TODO,payload:response.data})
  }catch(error){console.error(error)}
}
//Delete todo
export const deleteTodo =(id)=> async(dispatch)=>{
    try{
      await axios.delete(`${API_URL}/${id}`);
        dispatch({type:DELETE_TODO,payload:id});
    }catch(error){console.error(error)}
}