import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "post",
    initialState: {
        posts: [],
        postsCount: null,
        postsCategory: []
    },
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload
        },
        setPostsCount(state, action) {
            state.postsCount = action.payload
        },
        setPostsCategory(state, action) {
            state.postsCategory = action.payload
        },
    }
})

const postReducer = postSlice.reducer
const postActions = postSlice.actions

export { postReducer, postActions }