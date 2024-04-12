import { useState } from "react"
import "./comment-list.css"
import swal from "sweetalert"
import UpdateCommentModal from "./UpdateCommentModal"
const CommentList = () => {
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


    return (

        <div className="comment-list">
            <h4 className="comment-list-count">2 comment</h4>
            {[1, 2].map(comment => (
                <div
                    key={comment}
                    className="comment-item"
                >
                    <div className="comment-item-info">
                        <div className="comment-item-username">
                            user name
                        </div>
                        <div className="comment-item-time">
                            2 hours ago
                        </div>
                    </div>
                    <p className="comment-item-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qu
                    </p>
                    <div className="comment-item-icon-wrapper">
                        <i
                            onClick={() => setUpdateCommentModel(true)}
                            className="bi bi-pencil-square"></i>
                        <i
                            onClick={deleteCommentHandler}
                            className="bi bi-trash-fill"></i>
                    </div>
                </div>

            ))}

            {
                updateCommentModel && <UpdateCommentModal setUpdateCommentModel={setUpdateCommentModel} />
            }

        </div>
    )
}

export default CommentList