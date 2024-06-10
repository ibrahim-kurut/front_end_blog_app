import { useState } from "react"
import "./comment-list.css"
import swal from "sweetalert"
import UpdateCommentModal from "./UpdateCommentModal"
import { useDispatch, useSelector } from "react-redux"
import Moment from 'react-moment'
import { deleteComment } from "../../redux/apiCalls/commentApiCall"
const CommentList = ({ comments }) => {
    const { user } = useSelector(state => state.auth) // the user who logged in
    const [updateCommentModel, setUpdateCommentModel] = useState(false)


    const dispatch = useDispatch()



    // Delete Comment submit handler

    const deleteCommentHandler = (commentId) => {
        swal({
            title: "Are you sure?",
            text: "Once you delete it, you will not be able to recover this comment!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((isOk) => {
                // console.log(isOk);
                if (isOk) {
                    // delete  the Comment request here
                    dispatch(deleteComment(commentId))
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
                                    onClick={() => deleteCommentHandler(comment?._id)}
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