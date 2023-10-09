import { ADD_TASK, REMOVE_TASK, COMPLETED_TASK } from './actionTypes';

const  addTask = (task)=>{
    return { type:ADD_TASK,payload:task }
}
const  removeTask = (id)=>{
    return { type:REMOVE_TASK,payload: {id}}
}
const  completeTask = (id)=>{
    return { type:COMPLETED_TASK,payload: {id}}
}


const fetchTodo = () => () => async (dispatch,getState)=>{
        const res= await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await res.json()
        dispatch(addTask(data[0].title))
        dispatch(addTask(data[1].title))
        dispatch(addTask(data[2].title))
}
export { addTask, removeTask,completeTask, fetchTodo}