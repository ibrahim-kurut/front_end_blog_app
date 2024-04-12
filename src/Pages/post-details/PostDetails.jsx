import "./post-details.css"
import { Link, useParams } from 'react-router-dom'
import { posts } from '../../dummyData.js'
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import AddComment from "../../components/comments/AddComment.jsx"
import CommentList from "../../components/comments/CommentList.jsx"
import swal from "sweetalert"
import UpdatePostModal from "./UpdatePostModal.jsx"

const PostDetails = () => {

    const { id } = useParams()
    const post = posts.find(p => p._id === parseInt(id))
    // console.log(post);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [file, setFile] = useState(null)
    const [updatePostModal, setUpdatePostModal] = useState(false)


    // update image submit handler
    const updateImageSubmitHandler = (e) => {
        e.preventDefault();

        if (!file) {
            return toast.warning("No image selected ")
        } else {
            return toast.success("Your Image has been Updated Successfully")
        }
    }

    // Delete post submit handler

    const deletePostHandler = () => {
        swal({
            title: "Are you sure?",
            text: "Once you delete it, you will not be able to recover this post!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                // console.log(willDelete);
                if (willDelete) {
                    // delete  the post request here
                    swal("Post has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Something went wrong!");
                }
            });
    }

    return (
        <section className="post-details">
            <div className="post-details-image-wrapper">
                <img src={file ? URL.createObjectURL(file) : post.image} alt="" className="post-details-image" />
                <form
                    onSubmit={updateImageSubmitHandler}
                    className="update-post-image-form">
                    <label htmlFor="file" className="update-post-label">
                        select new image
                        <i className="bi bi-image-fill pl-2 text-xl"></i>
                    </label>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        style={{ display: "none" }}
                        onChange={(e) => setFile(e.target.files[0])}

                    />
                    <button type="submit">upload</button>
                </form>
            </div>
            <h1 className="post-details-title">
                {post.title}
            </h1>
            <div className="post-details-user-info">
                <img src={post.user.image} alt="" className="post-details-user-image" />
                <div className="post-details-user">
                    <strong>
                        <Link to="profile/1">
                            {post.user.username}
                        </Link>
                    </strong>
                    <span>{post.createdAt}</span>
                </div>
            </div>
            <p className="post-details-description">
                {post.description}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos accusantium debitis vel quia fugiat excepturi ipsa suscipit possimus, iure, eos repudiandae cupiditate doloribus praesentium qui aperiam eius, nostrum consequatur voluptatem? Inventore quibusdam distinctio odio magnam tempora quo voluptatibus autem dolore reiciendis delectus doloremque quis magni, iusto, deserunt expedita voluptas nemo velit quaerat omnis tempore. Eius.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos accusantium debitis vel quia fugiat excepturi ipsa suscipit possimus, iure, eos repudiandae cupiditate doloribus praesentium qui aperiam eius, nostrum consequatur voluptatem? Inventore quibusdam distinctio odio magnam tempora quo voluptatibus autem dolore reiciendis delectus doloremque quis magni, iusto, deserunt expedita voluptas nemo velit quaerat omnis tempore. Eius.
            </p>
            <div className="post-details-icon-wrapper">
                <div>
                    <i className="bi bi-hand-thumbs-up"></i>
                    <small>{post.likes.length} likes</small>
                </div>
                <div>
                    <i
                        onClick={() => setUpdatePostModal(true)}
                        className="bi bi-pencil-square"></i>
                    <i
                        onClick={deletePostHandler}
                        className="bi bi-trash-fill"></i>
                </div>
            </div>
            <AddComment />
            <CommentList />
            {
                updatePostModal && <UpdatePostModal setUpdatePostModal={setUpdatePostModal} post={post} />
            }
        </section>
    )
}

export default PostDetails