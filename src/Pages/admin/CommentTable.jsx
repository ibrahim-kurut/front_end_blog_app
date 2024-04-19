import "./admin-tables.css"
import AdminSidbar from './AdminSidbar'
import swal from "sweetalert"

const CommentTable = () => {


    // Delete Comment handler
    const deleteCommentHandler = () => {
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




    const commentData = [{
        "id": 1,
        "user_name": "Tamar Crichley",
        "comment": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
    }, {
        "id": 2,
        "user_name": "Huntley Leeb",
        "comment": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
    }, {
        "id": 3,
        "user_name": "Gussy Elsdon",
        "comment": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate,i eget orci vehicula condimentum."
    }, {
        "id": 4,
        "user_name": "Darryl Poundesford",
        "comment": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
    }, {
        "id": 5,
        "user_name": "Sanford Venny",
        "comment": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
    }]

    return (
        <section className="table-container">
            <AdminSidbar />
            <div className="table-wrapper">
                <h1 className="table-title">
                    Comment
                </h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>count</th>
                            <th>user</th>
                            <th>comment</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            commentData.map((item) => {
                                return (
                                    <tr key={item}>
                                        <td data-label="count">{item.id}</td>
                                        <td>
                                            <div className="table-image">
                                                <img
                                                    src="/images/user-avatar.png" alt=""
                                                    className="table-user-image"
                                                />
                                                <span className="table-username">
                                                    {item.user_name}
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            {item.comment}
                                        </td>
                                        <td>
                                            <div className="table-button-group">
                                                <button onClick={deleteCommentHandler}>
                                                    delete comment
                                                </button>
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

export default CommentTable