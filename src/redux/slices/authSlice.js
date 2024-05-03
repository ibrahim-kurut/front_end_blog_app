import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        // If the user info is in Local Storage, get it, or it returns null
        user: localStorage.getItem("userInfo") ?
            JSON.parse(localStorage.getItem("userInfo")) : null,

        registerMessage: null // If the user registers, the message will be taken from the backend
    },
    reducers: {
        // ============ login ============
        loginHandler(state, action) {
            state.user = action.payload;
        },
        // ============ logout ============
        logoutHandler(state) {
            state.user = null;
        },
        // ============ register ============
        registerUserHnadler(state, action) {
            state.registerMessage = action.payload;
        },

        // Edit a profile photo in Local Storage when the photo is edited in a profile page
        setUserPhoto(state, action) {
            state.user.profilePhoto = action.payload
        }
    }
})
const authReducer = authSlice.reducer
const authActions = authSlice.actions

export { authReducer, authActions }