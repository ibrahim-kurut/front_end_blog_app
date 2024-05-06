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
