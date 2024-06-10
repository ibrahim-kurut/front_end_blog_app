import { postActions } from "../slices/postSlice";
import request from "../../utils/request";
import { toast } from "react-toastify";


// create comment
export function createComment(newComment) {
    return async (dispatch, getState) => {
        try {
            const { data } = await request.post(`/api/comments`, newComment, {
                //* only logged in user can create commet
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token,
                }
            })
            dispatch(postActions.addCommentToPost(data))
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
}

// delete comment
export function deleteComment(commentId) {
    return async (dispatch, getState) => {
        try {
            await request.delete(`/api/comments/${commentId}`, {
                //* only logged in user can delete this comment
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token,
                }
            })
            dispatch(postActions.deleteCommentFromPost(commentId))
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
}