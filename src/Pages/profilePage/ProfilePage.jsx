import "./profile-page.css"
import { useEffect, useState } from "react"
// import PostList from "../../components/posts/PostList"
// import { posts } from "../../dummyData"
import { toast } from "react-toastify"
import swal from "sweetalert"
import UpdateProfileModal from "./UpdateProfileModal"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
import { deleteProfile, getUserProfile, uploadProfilePhoto } from "../../redux/apiCalls/profileApiCall"
import PostItem from "../../components/posts/PostItem"
import { Oval } from "react-loader-spinner"
import { logoutUser } from "../../redux/apiCalls/authApiCall"


const ProfilePage = () => {


    const [file, setFile] = useState(null)
    const [updateProfileModal, setUpdateProfileModal] = useState(false)

    const { profile, loading, isProfileDeleted } = useSelector(state => state.profile)
    const { user } = useSelector(state => state.auth)
    // console.log(profile);
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getUserProfile(id))
        window.scrollTo(0, 0);
    }, [dispatch, id])



    const navigate = useNavigate()

    useEffect(() => {
        if (isProfileDeleted) {
            navigate("/")
        }
    }, [isProfileDeleted, navigate])

    // form submit handler
    const formSubmitHandle = (e) => {
        e.preventDefault()
        if (!file) return toast.warning(("Please select a photo"))
        // console.log("image uploaded");

        const fd = new FormData()
        fd.append('image', file)

        dispatch(uploadProfilePhoto(fd))
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
            .then((isOk) => {
                // console.log(isOk);
                if (isOk) {
                    // delete  the account request here
                    dispatch(deleteProfile(user?._id))
                    // logout user after delete account
                    dispatch(logoutUser())
                }
            });
    }

    // loading spinner
    if (loading) {
        return (
            <div className="profile_loader">
                <Oval
                    visible={true}
                    height="80"
                    width="80"
                    color="#0275d8"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    strokeWidth="4"
                    secondaryColor="#000"

                />
            </div>
        )

    }

    return (
        <section className="profile">
            <div className="profile-header">
                <div className="profile-image-wrapper">
                    <img src={file ? URL.createObjectURL(file) : profile?.profilePhoto.url} alt="" className="profile-image" />

                    {/* if user loged in */}
                    {
                        user?._id === profile?._id && (
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
                        )
                    }
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
                {
                    user?._id === profile?._id && (
                        <button
                            onClick={() => setUpdateProfileModal(true)}
                            className="profile-update-btn">
                            <i className="bi bi-file-person-fill"></i>
                            Update Profile
                        </button>
                    )
                }
            </div>
            <div className="profile-posts-list">
                <h2 className="profile-posts-list-title">
                    {profile?.username} posts</h2>

                {
                    profile?.posts?.map((post) => {
                        return (
                            <PostItem
                                key={post._id}
                                post={post}
                                username={profile?.username}
                                userId={profile?._id}
                            />
                        )
                    })

                }
            </div>
            {
                user?._id === profile?._id && (
                    <button
                        onClick={deleteAccountHandler}
                        className="delete-account-btn">
                        Delete Your Account
                    </button>
                )

            }
            {
                updateProfileModal && (<UpdateProfileModal profile={profile} setUpdateProfileModal={setUpdateProfileModal} />)
            }
        </section>
    )
}

export default ProfilePage