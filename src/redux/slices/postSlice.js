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
        },
        //! delete post
        deletePost(state, action) {
            state.posts = state.posts.filter(post => post._id !== action.payload)
        },
        //! add comment to post
        addCommentToPost(state, action) {
            state.post.comments.push(action.payload)
        },
        //! delete comment
        deleteCommentFromPost(state, action) {
            // get comment from comment array
            const comment = state.post.comments.find(c => c._id === action.payload);
            // get index of comment
            const commentIndex = state.post.comments.indexOf(comment);
            // delete comment by index
            state.post.comments.splice(commentIndex, 1)
        }
    }
})

const postReducer = postSlice.reducer
const postActions = postSlice.actions

export { postReducer, postActions }