import { postActions } from "../slices/postSlice";
import request from "../../utils/request";
import { toast } from "react-toastify";

// Get Posts Based On Page Number 
export function fetchPosts(pageNumber) {
    return async (dispatch) => {
        try {

            const { data } = await request.get(`/api/posts?pageNumber=${pageNumber}`);
            dispatch(postActions.setPosts(data))
        } catch (error) {
            // console.log(error);
            toast.error(error.response.data.message);
        }
    }
}

// Get All Posts
export function getAllPosts() {
    return async (dispatch) => {
        try {
            const { data } = await request.get(`/api/posts`);
            dispatch(postActions.setPosts(data))
        } catch (error) {
            // console.log(error);
            toast.error(error.response.data.message);
        }
    }
}


// Get Posts Based On Count
export function getPostsCount() {
    return async (dispatch) => {
        try {
            const { data } = await request.get(`/api/posts/count`);
            dispatch(postActions.setPostsCount(data))
        } catch (error) {
            // console.log(error);
            toast.error(error.response.data.message);
        }
    }
}


// Get Posts Based On Category
export function getPostsByCategory(category) {
    return async (dispatch) => {
        try {
            const { data } = await request.get(`/api/posts?category=${category}`);
            dispatch(postActions.setPostsCategory(data))
        } catch (error) {
            // console.log(error);
            toast.error(error.response.data.message);
        }
    }
}

// Create a new post
export function createNewPost(newPost) {
    return async (dispatch, getState) => {
        try {
            dispatch(postActions.addLoading())
            await request.post(`/api/posts`, newPost, {
                //* only logged in user can create post
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token,
                    "Content-Type": "multipart/form-data"
                }
            })
            dispatch(postActions.createNewPostSuccess())

            setTimeout(() => {
                dispatch(postActions.resetIsPostCreated())
            }, 2000);

        } catch (error) {
            toast.error(error.response.data.message)
            dispatch(postActions.clearLoading())
        }
    }
}


// Get Single Post
export function getSinglePost(postId) {
    return async (dispatch) => {
        try {
            const { data } = await request.get(`/api/posts/${postId}`);
            dispatch(postActions.setPost(data))
        } catch (error) {
            // console.log(error);
            toast.error(error.response.data.message);
        }
    }
}
// Toggle Like Post
export function toggleLikePost(postId) {
    return async (dispatch, getState) => {
        try {
            const { data } = await request.put(`/api/posts/like/${postId}`, {}, {
                // only a logged in user can like this
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token,
                }
            });
            dispatch(postActions.setLike(data))
        } catch (error) {
            // console.log(error);
            toast.error(error.response.data.message);
        }
    }
}
