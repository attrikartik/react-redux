import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit"
import { ADD_TASK, REMOVE_TASK,COMPLETE_TASK } from "./actionTypes"
import http from "./utils"
import { apiCallBegin } from "./apiAction"
// import { addTask, completeTask, removeTask } from "./actions"

let id = 0
// ------------------ vanilla redux way of creading reducer--------------
// function reducer (state = [], action){
//    switch(action.type){
//     case addTask.type:// redux toolkit way
//         return [...state,{
//             id:++id,
//             task: action.payload,
//             completed:false
//         }]
//     case removeTask.type:
//         return state.filter(t=>t.id!=action.payload.id)
//     case completeTask.type:
//         return state.map(t=>t.id===action.payload.id?{...t,completed:true}:t)
//     default:
//         return state
//    }
// }

// ------------------ redux-toolkit way of creading reducer--------------

// const redcuer = createReducer([],{
//     // addTask.type
//     [ADD_TASK]:(state,action)=>{
        //    state.push({
        //         id:++id,
        //         task: action.payload,
        //         completed:false
        //     }) 
//     },
//     [REMOVE_TASK]:(state,action)=>{
        //     const indx = state.findIndex(t=>t.id === action.payload.id)
        //     state.splice(indx,1)
//     },
//     [COMPLETE_TASK]:(state,action)=>{
        //     const indx = state.findIndex(t=>t.id === action.payload.id)
        //     state[indx].completed = true
//     }
// })

// --------- redux-toolkit - using createSlice way of creading reducer------

// using Asyncthunk menthod for api call

// const fetchTasks = createAsyncThunk("fetchTasks",async (a, {rejectWithValue})=>{
//         try{
//                 const res = await http.get('/tasks/')
//                 // console.log(res)
//                 return {tasks:res.data}
//         }catch(err){
//                 return rejectWithValue({error:err.message})
//         }
// })

// initial ste for tasks Slice
const initialState = {
        tasks:[],
        loading:false,
        error:null
}
const tasksSlice = createSlice({
        name:'tasks',
        initialState,
        reducers:{
                apiRequested:(state,action)=>{
                        state.loading = true
                        state.error = false
                },
                apiError:(state,action)=>{
                        state.loading = false
                        state.error = true
                },
                getTasks:(state,action)=>{
                       state.tasks = action.payload
                       state.loading = false
                       state.error = false
                },
                addTask:(state,action)=>{
                        state.tasks.push({
                                id:++id,
                                task: action.payload,
                                completed:false
                        })
                },
                removeTask:(state,action)=>{
                        const indx = state.tasks.findIndex(t=>t.id === action.payload.id)
                        state.tasks.splice(indx,1)
                },
                completeTask:(state,action)=>{
                        const indx = state.tasks.findIndex(t=>t.id === action.payload.id)
                        state.tasks[indx].completed = true
                }
        },
        // this property is used with asynThunk approach
        // extraReducers:{
        //         [fetchTasks.fulfilled]:(state,action)=>{
        //                 // console.log(action)
        //                 state.tasks = action.payload.tasks
        //                 state.loading = false
        //         },
        //         [fetchTasks.pending]:(state,action)=>{
        //                 state.loading = true
        //         },
        //         [fetchTasks.rejected]:(state,action)=>{
        //                 state.error = action.payload.error
        //         }
        // }
})

export const {getTasks,addTask,removeTask,completeTask,apiRequested,apiError} = tasksSlice.actions
// export {fetchTasks}
export default tasksSlice.reducer


// exporting action creator for re-using this action dispatched
export const loadTasks = ()=>apiCallBegin({
        url:'/tasks',
        methood:'GET',
        onSuccess:getTasks.type,
        onStart:apiRequested.type,
        onError:apiError.type})