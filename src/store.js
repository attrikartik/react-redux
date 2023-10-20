import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import tasks from './reducer'
import { configureStore } from '@reduxjs/toolkit'
import api from './middleware/api'

// configure store using vanilla redux
// const store = createStore(reducer, applyMiddleware(thunk))

// configure store using redux-toolkit, new extra param for middleware its done behind the scene
const newStore = configureStore({
    reducer:{
        tasks:tasks
    },
    middleware:(getDefaultMiddleware)=>[
        ...getDefaultMiddleware(),
        api
    ]
})
export default newStore