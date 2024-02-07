// import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import { userLoginReducer } from './reducers/userReducers';
import { thunk } from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';
// import thunk from "redux-thunk";

//  const store = configureStore({
//     reducer : {
//         auth:userSlice
//     }
// })

// const userInfoFromStorage = localStorage.getItem("token")
// ? JSON.parse(localStorage.getItem("token"))
// : null 

// const reducer = combineReducers({
//     userLogin:userLoginReducer
// })

// const initialState = {
//     userLogin:{userInfo:userInfoFromStorage}
// }

// const middleware = [thunk];

// const store = createStore(
//     reducer,
//     initialState,

// )

const store = configureStore({
    reducer : {
        auth:userSlice
    }
})
export default store

