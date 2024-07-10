import { Link } from "react-router-dom"
import AddCategoryForm from "./AddCategoryForm"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getAllCategory } from "../../redux/apiCalls/categoryApiCall"
import { getUsersCount } from "../../redux/apiCalls/profileApiCall"
// import AddCategoryForm from "./AddCategoryForm"



const AdminMain = () => {

    const dispatch = useDispatch()
    const { categories } = useSelector(state => state.category)
    const { usersCount } = useSelector(state => state.profile)


    useEffect(() => {
        dispatch(getAllCategory())
        dispatch(getUsersCount())
    }, [dispatch])
    // console.log(categories?.length);
    console.log("usersCount ", usersCount);




    return (
        <div className="admin-main">
            <div className="admin-main-header">

                {/* users card */}
                <div className="admin-main-card">
                    <h5 className="admin-card-title">Users</h5>
                    <div className="admin-card-count">{usersCount}</div>
                    <div className="admin-card-link-wrapper">
                        <Link
                            className="admin-card-link"
                            to="/admin-dashboard/users-table">
                            see all users
                        </Link>
                        <div className="admin-card-icon">
                            <i className="bi bi-person"></i>
                        </div>
                    </div>
                </div>
                {/* posts card */}
                <div className="admin-main-card">
                    <h5 className="admin-card-title">Posts</h5>
                    <div className="admin-card-count">220</div>
                    <div className="admin-card-link-wrapper">
                        <Link
                            className="admin-card-link"
                            to="/admin-dashboard/posts-table">
                            see all posts
                        </Link>
                        <div className="admin-card-icon">
                            <i className="bi bi-file-post"></i>
                        </div>
                    </div>
                </div>
                {/* categories card */}
                <div className="admin-main-card">
                    <h5 className="admin-card-title">Categories</h5>
                    <div className="admin-card-count">
                        {categories?.length}
                    </div>
                    <div className="admin-card-link-wrapper">
                        <Link
                            className="admin-card-link"
                            to="/admin-dashboard/categories-table">
                            see all categories
                        </Link>
                        <div className="admin-card-icon">
                            <i className="bi bi-tag-fill"></i>
                        </div>
                    </div>
                </div>
                {/* comments card */}
                <div className="admin-main-card">
                    <h5 className="admin-card-title">Comments</h5>
                    <div className="admin-card-count">250</div>
                    <div className="admin-card-link-wrapper">
                        <Link
                            className="admin-card-link"
                            to="/admin-dashboard/comments-table">
                            see all comments
                        </Link>
                        <div className="admin-card-icon">
                            <i className="bi bi-chat-left-text"></i>
                        </div>
                    </div>
                </div>
            </div>


            {/* add category form */}
            <AddCategoryForm />
        </div>
    )
}

export default AdminMain