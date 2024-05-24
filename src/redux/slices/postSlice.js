import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "post",
    initialState: {
        posts: [],
        postsCount: null,
        postsCategory: [],
        loading: false,
        isPostCreated: false,
        post: null // for get post details
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
        //! ======= create new post =======
        addLoading(state) {
            state.loading = true;
        },
        clearLoading(state) {
            state.loading = false;
        },
        createNewPostSuccess(state) {
            state.isPostCreated = true;
            state.loading = false
        },
        resetIsPostCreated(state) {
            state.isPostCreated = false
        },
        //! get detali post
        setPost(state, action) {
            state.post = action.payload
        },
        //! for make like
        setLike(state, action) {
            state.post.likes = action.payload.likes
        }
    }
})

const postReducer = postSlice.reducer
const postActions = postSlice.actions

export { postReducer, postActions }