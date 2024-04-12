import "./update-comment-model.css"
import { useState } from 'react'
import { toast } from "react-toastify"

const UpdateCommentModal = ({ setUpdateCommentModel }) => {

    const [updateComment, setUpdateComment] = useState("")
    // form submit handler
    const formSubmitHandler = (e) => {
        e.preventDefault()

        if (updateComment.trim() === "") {
            return toast.error("please write something");
        }
        if (updateComment.length < 3) {
            return toast.error("the comment must not be less than 3 characters");
        }

        setTimeout(() => {
            toast.success("The post has been updated successfully")
            setUpdateCommentModel(false);
        }, 1000);

        // console.log(updateComment);


    }


    return (
        <div className="update-comment">
            <form onSubmit={formSubmitHandler} className="update-post-form">
                <abbr title="close">
                    <i
                        onClick={() => setUpdateCommentModel(false)}
                        className="bi bi-x-circle-fill update-comment-form-close"></i>
                </abbr>
                <h1 className="update-comment-title">Edit comment</h1>
                <input
                    type="text"
                    className="update-comment-input"
                    value={updateComment}
                    onChange={(e) => setUpdateComment(e.target.value)}
                />


                <button
                    type="submit" className="update-comment-btn">
                    Edit post
                </button>
            </form>
        </div>
    )
}

export default UpdateCommentModal