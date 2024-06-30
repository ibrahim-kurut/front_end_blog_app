import { profileActions } from "../slices/profileSlice";
import { authActions } from "../slices/authSlice";
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

// Upload Profile Photo
export function uploadProfilePhoto(newPhoto) {
    return async (dispatch, getState) => {
        try {
            const { data } = await request
                .post(`/api/users/profile/profile-photo-Upload`, newPhoto, {
                    // The user can only change his photos, provided that he is logged in
                    headers: {
                        Authorization: "Bearer " + getState().auth.user.token,
                        "Content-Type": "multiparp/form-data"
                    }
                });
            // edit profile photo in profile page
            dispatch(profileActions.setProfilePhoto(data.profilePhoto));

            //! Edit a profile photo in Local Storage when the photo is edited in a profile page
            // edit user photo
            dispatch(authActions.setUserPhoto(data.profilePhoto))

            toast.success(data.message)


            // modify the user in local storage with new photo
            const user = JSON.parse(localStorage.getItem("userInfo")) // get user from localStorage
            user.profilePhoto = data?.profilePhoto //  Update the user's profilePhoto 

            localStorage.setItem("userInfo", JSON.stringify(user)) // Save this changes we made in Local Storage

        } catch (error) {
            // console.log(error);
            toast.error(error.response.data.message);
        }
    }
}



// Update Profile Info
export function updateProfileInfo(userId, info) {
    return async (dispatch, getState) => {
        try {
            const { data } = await request
                .put(`/api/users/profile/${userId}`, info, {
                    // The user can only change his info, provided that he is logged in
                    headers: {
                        Authorization: "Bearer " + getState().auth.user.token,
                    }
                });
            // edit profile info in profile page
            dispatch(profileActions.updateProfileInfo(data));

            //! Edit a username in Local Storage when the user info is edited in a profile page
            // edit user name
            dispatch(authActions.setUserName(data.username))


            // modify the username in local storage with new username
            const user = JSON.parse(localStorage.getItem("userInfo")) // get user from localStorage
            user.username = data?.username //  Update the user's username 

            localStorage.setItem("userInfo", JSON.stringify(user)) // Save this changes we made in Local Storage

        } catch (error) {
            // console.log(error);
            toast.error(error.response.data.message);
        }
    }
}


// Delete Profile (Account)
export function deleteProfile(userId) {
    return async (dispatch, getState) => {
        try {
            dispatch(profileActions.setLoading())
            const { data } = await request
                .delete(`/api/users/profile/${userId}`, {
                    // The user can only delete his information if he is logged in
                    headers: {
                        Authorization: "Bearer " + getState().auth.user.token,
                    }
                });
            // edit profile info in profile page
            dispatch(profileActions.setIsProfileDeleted());

            toast.success(data?.message)

            setTimeout(() => {
                dispatch(profileActions.clearIsProfileDeleted())
            }, 2000);

        } catch (error) {
            // console.log(error);
            toast.error(error.response.data.message);
            dispatch(profileActions.clearLoading())
        }
    }
}