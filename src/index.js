import store from './store'
import  {addTask, completeTask, removeTask, fetchTodo} from './actions';
// store.dispatch(addTask("Have dinner"))
// store.dispatch(addTask("Have lunch"))
// store.dispatch(addTask("Have snack"))
// store.dispatch(addTask("Have brekfast"))
// store.dispatch(completeTask(1))

store.dispatch(fetchTodo())
console.log(store.getState());
