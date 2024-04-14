import { useState } from "react"
import "./update-profile-model.css"
import { toast } from "react-toastify"


const user = {
    username: "kenan kurut",
    bio: "hello my name is kenan"
}





const UpdateProfileModal = ({ setUpdateProfileModal }) => {

    const [username, setUsername] = useState(user.username)
    const [bio, setBio] = useState(user.bio)
    const [password, setPassword] = useState("")


    // form submit handler
    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedUser = { username, bio }
        if (password.trim() !== "") {
            updatedUser.password = password
        }
        //todo sent updatedUser to server and update the profile 
        console.log('updated User', updatedUser);
        toast.success("Your Profile has been Updated Successfully!")
        setUpdateProfileModal(false)
        // console.log(updatedUser);
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