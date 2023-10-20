import store from './store'
import  {addTask, completeTask, removeTask, fetchTodo, getTasks, fetchTasks, loadTasks} from './reducer';
import axios from 'axios';
import { apiCallBegin } from './apiAction';
// store.dispatch(addTask("Have dinner"))
// store.dispatch(addTask("Have lunch"))
// store.dispatch(addTask("Have snack"))
// store.dispatch(addTask("Have brekfast"))
// store.dispatch(completeTask({id:1}))
// store.dispatch(removeTask({id:2}))

// store.dispatch(fetchTodo())
// console.log(store.getState());

//---method 1 to call api -simple function to call api and disptach action with payload--

// const getTasksFromApi = async ()=>{
//    const res = await axios.get('http://localhost:5000/api/tasks/')
//    console.log(res)
//    store.dispatch(getTasks({tasks:res.data}))
// }

// getTasksFromApi()

// when action is dispatched when created using createAction- then in () is payload and 

store.dispatch(loadTasks())// 
