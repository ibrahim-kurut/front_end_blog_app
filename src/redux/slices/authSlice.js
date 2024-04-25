import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        // If the user info is in Local Storage, get it, or it returns null
        user: localStorage.getItem("userInfo") ?
            JSON.parse(localStorage.getItem("userInfo")) : null,
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
    }
})
const authReducer = authSlice.reducer
const authActions = authSlice.actions

export { authReducer, authActions }