import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        profile: null,
        loading: false,
        isProfileDeleted: false
    },
    reducers: {
        setProfile(state, action) {
            state.profile = action.payload
        },
        setProfilePhoto(state, action) {
            state.profile.profilePhoto = action.payload
        },
        // Update profile information
        updateProfileInfo(state, action) {
            state.profile = action.payload
        },
        // =============== loading ===============
        setLoading(state) {
            state.loading = true
        },
        clearLoading(state) {
            state.loading = false
        },
        // =============== Delete profile ===============
        setIsProfileDeleted(state) {
            state.isProfileDeleted = true
            state.loading = false
        },
        clearIsProfileDeleted(state) {
            state.isProfileDeleted = false
        }


    }
})

const profileReducer = profileSlice.reducer
const profileActions = profileSlice.actions

export { profileReducer, profileActions }