import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import userReducer from './userSlice'
import cateReducer from './cateSlice'
import questionReducer from './questionSlice'
export default configureStore({
    reducer:{
        auth: authReducer,
        user: userReducer,
        cate: cateReducer,
        question: questionReducer
    }
})