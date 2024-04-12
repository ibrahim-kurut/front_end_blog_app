import "./add-comment.css"
import { useState } from "react"
import { toast } from "react-toastify"
const AddComment = () => {
    const [comment, setComment] = useState("")


    // form submit handler
    const formHandleSubmit = (e) => {
        e.preventDefault()
        if (!comment || comment.trim() === "" || comment.length < 5) {
            return toast.error("Please enter a valid comment!")
        } else {
            toast.success("Comment added successfully")

        }
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
            <button className="add-comment-btn">Comment</button>
        </form>
    )
}

export default AddComment