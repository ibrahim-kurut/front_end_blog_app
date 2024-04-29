import { profileActions } from "../slices/profileSlice";
import request from "../../utils/request";
import { toast } from "react-toastify";

// Get User Profile
export function getUserProfile(userId) {
    return async (dispatch) => {
        try {

            const { data } = await request.get(`/api/users/profile/${userId}`);
            dispatch(profileActions.setProfile(data))
        } catch (error) {
            // console.log(error);
            toast.error(error.response.data.message);
        }
    }
}