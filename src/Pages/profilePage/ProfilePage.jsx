import "./profile-page.css"
import { useEffect, useState } from "react"
import PostList from "../../components/posts/PostList"
import { posts } from "../../dummyData"
import { toast } from "react-toastify"
import swal from "sweetalert"


const ProfilePage = () => {


    const [file, setFile] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    // form submit handler
    const formSubmitHandle = (e) => {
        e.preventDefault()
        if (!file) return toast.warning(("Please select a photo"))
        console.log("image uploaded");
    }

    // Delete Account Handler
    const deleteAccountHandler = async () => {
        swal({
            title: "Are you sure?",
            text: "Once you delete it, you will not be able to recover your account!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                // console.log(willDelete);
                if (willDelete) {
                    // delete  the account request here
                    swal("account has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Something went wrong!");
                }
            });
    }

    return (
        <section className="profile">
            <div className="profile-header">
                <div className="profile-image-wrapper">
                    <img src={file ? URL.createObjectURL(file) : "/images/user-avatar.png"} alt="" className="profile-image" />
                    <form onSubmit={formSubmitHandle}>
                        <abbr title="choose profile photo">
                            <label
                                htmlFor="file"
                                className="bi bi-camera-fill upload-profile-photo-icon">
                            </label>
                        </abbr>
                        <input
                            style={{ display: "none" }}
                            type="file"
                            name="file"
                            id="file"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                        <button
                            type="submit"
                            className="upload-profile-photo-btn"
                        >
                            upload
                        </button>
                    </form>
                </div>
                <h1 className="profile-username">
                    user name
                </h1>
                <p className="profile-bio">
                    bio
                </p>
                <div className="user-date-joined">
                    <strong>Date Joined: </strong>
                    <span>
                        {new Date().toLocaleString()}
                    </span>
                </div>
                <button
                    className="profile-update-btn">
                    <i className="bi bi-file-person-fill"></i>
                    Update Profile
                </button>
            </div>
            <div className="profile-posts-list">
                <h2 className="profile-posts-list-title">
                    user name posts</h2>

                <PostList posts={posts} />
            </div>
            <button
                onClick={deleteAccountHandler}
                className="delete-account-btn">
                Delete Your Account
            </button>
        </section>
    )
}

export default ProfilePage