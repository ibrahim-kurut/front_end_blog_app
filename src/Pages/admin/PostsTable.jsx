import "./admin-tables.css"
import { Link } from "react-router-dom"
import AdminSidbar from './AdminSidbar'
import swal from "sweetalert"
import { posts } from "../../dummyData"

const PostsTable = () => {

    // Delete Post handler
    const deletePostHandler = () => {
        swal({
            title: "Are you sure?",
            text: "you want to delete this post?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                // console.log(willDelete);
                if (willDelete) {
                    // delete the post request here
                    swal("post has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Something went wrong!");
                }
            });
    }





    return (
        <section className="table-container">
            <AdminSidbar />
            <div className="table-wrapper">
                <h1 className="table-title">
                    posts
                </h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>count</th>
                            <th>user</th>
                            <th>post title</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.map((item, index) => {
                                return (
                                    <tr key={item._id}>
                                        <td data-label="count">{index + 1}</td>
                                        <td>
                                            <div className="table-image">
                                                <img
                                                    src="/images/user-avatar.png" alt=""
                                                    className="table-user-image"
                                                />
                                                <span className="table-username">
                                                    {item.user.username}
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            {item.title}
                                        </td>
                                        <td>
                                            <div className="table-button-group">
                                                <button>
                                                    <Link to={`/posts/details/${item._id}`}>
                                                        view post
                                                    </Link>
                                                </button>

                                                <button
                                                    onClick={deletePostHandler}
                                                >delete post</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default PostsTable