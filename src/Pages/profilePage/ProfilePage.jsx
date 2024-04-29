import "./profile-page.css"
import { useEffect, useState } from "react"
import PostList from "../../components/posts/PostList"
import { posts } from "../../dummyData"
import { toast } from "react-toastify"
import swal from "sweetalert"
import UpdateProfileModal from "./UpdateProfileModal"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getUserProfile } from "../../redux/apiCalls/profileApiCall"

const ProfilePage = () => {


    const [file, setFile] = useState(null)
    const [updateProfileModal, setUpdateProfileModal] = useState(false)

    const { profile } = useSelector(state => state.profile)
    console.log(profile);
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getUserProfile(id))
        window.scrollTo(0, 0);
    }, [dispatch, id])
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
                    <img src={file ? URL.createObjectURL(file) : profile?.profilePhoto.url} alt="" className="profile-image" />
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
                    {profile?.username}
                </h1>
                <p className="profile-bio">
                    {profile?.bio}
                </p>
                <div className="user-date-joined">
                    <strong>Date Joined: </strong>
                    <span>
                        {new Date(profile?.updatedAt).toLocaleString()}
                    </span>
                </div>
                <button
                    onClick={() => setUpdateProfileModal(true)}
                    className="profile-update-btn">
                    <i className="bi bi-file-person-fill"></i>
                    Update Profile
                </button>
            </div>
            <div className="profile-posts-list">
                <h2 className="profile-posts-list-title">
                    {profile?.username} posts</h2>

                <PostList posts={posts} />
            </div>
            <button
                onClick={deleteAccountHandler}
                className="delete-account-btn">
                Delete Your Account
            </button>
            {
                updateProfileModal && (<UpdateProfileModal setUpdateProfileModal={setUpdateProfileModal} />)
            }
        </section>
    )
}

export default ProfilePage