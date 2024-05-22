import { useState } from "react"
import "./comment-list.css"
import swal from "sweetalert"
import UpdateCommentModal from "./UpdateCommentModal"
import { useSelector } from "react-redux"
import Moment from 'react-moment'
const CommentList = ({ comments }) => {
    const { user } = useSelector(state => state.auth) // the user who logged in
    const [updateCommentModel, setUpdateCommentModel] = useState(false)
    // Delete Comment submit handler

    const deleteCommentHandler = () => {
        swal({
            title: "Are you sure?",
            text: "Once you delete it, you will not be able to recover this comment!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                // console.log(willDelete);
                if (willDelete) {
                    // delete  the Comment request here
                    swal("Comment has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Something went wrong!");
                }
            });
    }

    console.log(comments);
    return (

        <div className="comment-list">
            <h4 className="comment-list-count">{comments?.length} comment</h4>
            {comments?.map(comment => (
                <div
                    key={comment?._id}
                    className="comment-item"
                >
                    <div className="comment-item-info">
                        <div className="comment-item-username">
                            {comment?.username}
                        </div>
                        <div className="comment-item-time">
                            <Moment fromNow ago>
                                {comment?.createdAt}
                            </Moment> ago
                        </div>
                    </div>
                    <p className="comment-item-text">
                        {comment?.comment}
                    </p>
                    {
                        user?._id === comment?.user && (
                            <div className="comment-item-icon-wrapper">
                                <i
                                    onClick={() => setUpdateCommentModel(true)}
                                    className="bi bi-pencil-square"></i>
                                <i
                                    onClick={deleteCommentHandler}
                                    className="bi bi-trash-fill"></i>
                            </div>
                        )

                    }
                </div>

            ))}

            {
                updateCommentModel && <UpdateCommentModal setUpdateCommentModel={setUpdateCommentModel} />
            }

        </div>
    )
}

export default CommentList