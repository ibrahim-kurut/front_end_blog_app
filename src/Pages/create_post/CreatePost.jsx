import { useEffect, useState } from "react"
import "./creat-post.css"
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNewPost } from "../../redux/apiCalls/postApiCall";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import { getAllCategory } from "../../redux/apiCalls/categoryApiCall";
const CreatePost = () => {


    const dispatch = useDispatch()
    const { loading, isPostCreated } = useSelector(state => state.post)
    const { categories } = useSelector(state => state.category)



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
        // setTimeout(() => {
        //     toast.success("data sended successfully")
        //     setTitle("")
        //     setCategory("")
        //     setDescription("")
        //     setFile(null)
        // }, 1000);



        //!  Converting data taken from input  to objects to send them to the db
        const fd = new FormData()
        fd.append("image", file)
        fd.append("title", title)
        fd.append("description", description)
        fd.append("category", category)


        //* send form date to server
        dispatch(createNewPost(fd))


        //console.log({ title, category, description, file })


    }
    const navigate = useNavigate()
    useEffect(() => {
        if (isPostCreated) {
            navigate("/")
        }
    }, [isPostCreated, navigate])


    // get all category
    useEffect(() => {
        dispatch(getAllCategory())
    }, [dispatch])


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

                    {
                        categories.map(category =>
                            <option key={category?._id} value={category?.title}>{category?.title}</option>
                        )
                    }

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
                    {loading ? <LoadingSpinner /> : "create post"}
                </button>
            </form>
        </div>
    )
}

export default CreatePost