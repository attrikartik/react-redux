import { createAction } from '@reduxjs/toolkit';
import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from './actionTypes';

// -----------------------vanilla redux way of creating action-------------------
// const  addTask = (task)=>{
//     return { type:ADD_TASK,payload:task }
// }
// const  removeTask = (id)=>{
//     return { type:REMOVE_TASK,payload: {id}}
// }
// const  completeTask = (id)=>{
//     return { type:COMPLETED_TASK,payload: {id}}
// }

// ------------------------redux-toolkit way of creating actions ---------------

const addTask = createAction(ADD_TASK)
const removeTask = createAction(REMOVE_TASK)
const completeTask = createAction(COMPLETE_TASK)

const fetchTodo = () => () => async (dispatch,getState)=>{
        const res= await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await res.json()
        console.log(data)
        dispatch(addTask({task:data[0].title}))
        dispatch(addTask({task:data[1].title}))
        dispatch(addTask({task:data[2].title}))
}
export { addTask, removeTask,completeTask, fetchTodo}