import { authActions } from "../slices/authSlice";
import request from "../../utils/request";
import { toast } from "react-toastify";


// ============= login user =============
export function LoginUser(userData) {
    // send request to server with username and password
    return async (dispatch) => {
        try {
            const res = await request.post("/api/auth/login", userData)

            dispatch(authActions.loginHandler(res.data));
            // save user data in local storage for future use
            localStorage.setItem("userInfo", JSON.stringify(res.data));
        } catch (error) {
            // If the user enters the wrong password or email, show an error message on the screen
            toast.error(error.response.data.message);
            console.log(error)

        }
    }
}

// ============= logout user =============
export function logoutUser() {

    return (dispatch) => {
        dispatch(authActions.logoutHandler())
        localStorage.removeItem("userInfo")
    }
}

// ============= register user =============
export function registerUser(userData) {
    return async (dispatch) => {
        try {
            const res = await request.post("/api/auth/register", userData)
            dispatch(authActions.registerUserHnadler(res.data.message))
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}

