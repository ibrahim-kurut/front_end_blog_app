import React, { useState } from 'react'
import "./update-post-model.css"
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { updatePost } from '../../redux/apiCalls/postApiCall'






const UpdatePostModal = ({ setUpdatePostModal, post }) => {

    const dispatch = useDispatch()




    const [title, setTitle] = useState(post.title)
    const [description, setDescription] = useState(post.description)
    const [category, setCategory] = useState(post.category)

    // form submit handler
    const formSubmitHandler = (e) => {
        e.preventDefault()

        if (title.trim() === "") {
            return toast.error("post title is required");
        }
        if (title.length < 3) {
            return toast.error("the post title must not be less than 3 characters");
        }
        if (category.trim() === "") {
            return toast.error("post category is required");
        }

        if (description.trim() === "") {
            return toast.error("post description is required");
        }
        if (description.length < 10) {
            return toast.error("the post description must not be less than 10 characters");
        }

        //  setTimeout(() => {
        //      toast.success("The post has been updated successfully")
        //  }, 2000);


        // @TODO -> send form date to server

        // console.log({ title, category, description })

        dispatch(updatePost({ title, category, description }, post?._id))
        setTimeout(() => {
            window.location.reload()
        }, 100);
        // setUpdatePostModal(false)
    }

    return (
        <div className="update-post">
            <form onSubmit={formSubmitHandler} className="update-post-form">
                <abbr title="close">
                    <i
                        onClick={() => setUpdatePostModal(false)}
                        className="bi bi-x-circle-fill update-post-form-close"></i>
                </abbr>
                <h1 className="update-post-title">update post</h1>
                <input
                    type="text"
                    className="update-post-input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <select
                    className="update-post-input"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option disabled value="">
                        Select Category
                    </option>
                    <option value="music">music</option>
                    <option value="coffee">coffee</option>
                </select>
                <textarea
                    className="update-post-textarea"
                    rows="5"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                >
                </textarea>
                <button type="submit" className="update-post-btn">update post</button>
            </form>
        </div>
    )
}

export default UpdatePostModal