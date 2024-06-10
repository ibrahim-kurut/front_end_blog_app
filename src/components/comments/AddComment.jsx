import "./add-comment.css"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { createComment } from "../../redux/apiCalls/commentApiCall"

const AddComment = ({ postId, user }) => {
    const [comment, setComment] = useState("")
    const dispatch = useDispatch()

    // form submit handler
    const formHandleSubmit = (e) => {
        e.preventDefault()
        if (!comment || comment.trim() === "") {
            return toast.error("Please enter a valid comment!")
        }

        dispatch(createComment({ comment, postId }))

        setTimeout(() => {
            setComment("")
        }, 1000);
    }
    return (
        <form
            onSubmit={formHandleSubmit}
            className="add-comment">
            <input
                type="text"
                placeholder="add a comment"
                className="add-comment-input"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            {
                user ?
                    <button className="add-comment-btn">Comment</button>
                    :
                    <p className="add-comment-btn">To add a comment, log in first</p>
            }
        </form>
    )
}

export default AddComment