import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './slices/authSlice'
import { profileReducer } from './slices/profileSlice'
import { postReducer } from './slices/postSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
        post: postReducer
    },
})

export default store