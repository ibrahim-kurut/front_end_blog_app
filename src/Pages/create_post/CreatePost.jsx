import { useState } from "react"
import "./creat-post.css"
import { toast } from 'react-toastify';

const CreatePost = () => {




    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [file, setFile] = useState(null)

    // create form submit handler
    const formSubmitHandler = (e) => {
        e.preventDefault()

        // validation
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
        if (!file) {
            return toast.error("the post image is required");
        }
        setTimeout(() => {
            toast.success("data sended successfully")
            setTitle("")
            setCategory("")
            setDescription("")
            setFile(null)
        }, 1000);



        //!  Converting data taken from input  to objects to send them to the db
        const fd = new FormData()
        fd.append("images", file)
        fd.append("title", title)
        fd.append("description", description)
        fd.append("category", category)


        //todo send form date to server



        console.log({ title, category, description, file })


    }


    return (
        <div className="section create-post">
            <h1 className="create-post-title">
                create new post
            </h1>
            <form onSubmit={formSubmitHandler} className="create-post-form">
                <input
                    type="text"
                    placeholder="post title"
                    className="create-post-input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="create-post-input">
                    <option disabled value="">
                        select a category
                    </option>
                    <option value="music">music</option>
                    <option value="coffee">coffee</option>
                </select>
                <textarea
                    className="create-post-textarea"
                    rows="5"
                    placeholder="post description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                >
                </textarea>
                <input
                    type="file"
                    name="file"
                    id="file"
                    className="create-post-upload"
                    onChange={(e) => setFile(e.target.files[0])}
                //! upload multiple image
                // multiple
                // onChange={(e) => setFile(e.target.files)}

                />
                <button type="submit" className="create-post-btn capitalize">
                    create post
                </button>
            </form>
        </div>
    )
}

export default CreatePost