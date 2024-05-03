import { useState } from "react"
import "./update-profile-model.css"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { updateProfileInfo } from "../../redux/apiCalls/profileApiCall"








const UpdateProfileModal = ({ setUpdateProfileModal, profile }) => {

    const dispatch = useDispatch()

    const [username, setUsername] = useState(profile.username)
    const [bio, setBio] = useState(profile.bio)
    const [password, setPassword] = useState("")

    // form submit handler
    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedUser = { username, bio }
        if (password.trim() !== "") {
            updatedUser.password = password
        }
        // console.log('updated User', updatedUser);


        // sent updatedUser to server and update the profile 
        dispatch(updateProfileInfo(profile?._id, updatedUser))

        toast.success("Your Profile has been Updated Successfully!")
        setUpdateProfileModal(false)


    }

    return (
        <div className="update-profile">
            <form
                onSubmit={handleSubmit}
                className="update-profile-form">
                <abbr title="close">
                    <i
                        onClick={() => setUpdateProfileModal(false)}
                        className="bi bi-x-circle-fill update-profile-form-close">
                    </i>
                </abbr>
                <h2 className="update-profile-title">
                    Edit Profile
                </h2>
                <input
                    type="text"
                    className="update-profile-input"
                    placeholder="Enter Your Full Name"
                    value={username}
                    onChange={(e) => { setUsername(e.target.value) }}
                />
                <input
                    type="text"
                    className="update-profile-input"
                    placeholder="Enter Your Bio"
                    value={bio}
                    onChange={(e) => { setBio(e.target.value) }}
                />
                <input
                    type="password"
                    className="update-profile-input"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                />

                <button type="submit" className="update-profile-btn">
                    update profile
                </button>
            </form>
        </div>
    )
}

export default UpdateProfileModal