import { ADD_TASK, REMOVE_TASK,COMPLETED_TASK } from "./actionTypes"

let id = 0
function reducer (state = [], action){
   switch(action.type){
    case ADD_TASK:
        return [...state,{
            id:++id,
            task: action.payload,
            completed:false
        }]
    case REMOVE_TASK:
        return state.filter(t=>t.id!=action.payload.id)
    case COMPLETED_TASK:
        return state.map(t=>t.id===action.payload.id?{...t,completed:true}:t)
    default:
        return state
   }
}

export default reducer