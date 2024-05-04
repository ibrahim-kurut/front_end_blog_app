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

