import { Link } from "react-router-dom"
import "./post.css"
const PostItem = ({ post }) => {
    return (
        <div className="post-item">
            <div className="post-item-image-wrapper">
                <img src={post.image} alt="" className="post-item-image" />
            </div>
            <div className="post-item-info-wrapper">
                <div className="post-item-info">
                    <div className="post-item-author">
                        <strong>Author: </strong>
                        <Link to="/profile/1" >{post.user.username}
                        </Link>
                    </div>
                    <div className="post-item-date">
                        {new Date(post.createdAt).toDateString()}
                    </div>
                </div>
                <div className="post-item-details">
                    <h4 className="post-item-title">{post.title}</h4>
                    <Link
                        className="post-item-category"
                        to={`/posts/categories/${post.category}`}>
                        {post.category}
                    </Link>
                </div>
                <p className="post-item-description">
                    {post.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit veniam molestiae dolorem fugit ad doloremque tempore qui minus! Hic, dicta obcaecati, provident facilis veniam sunt eius fugit neque harum quasi eligendi at aperiam, asperiores cupiditate amet consectetur doloribus adipisci deserunt ad sapiente delectus quos vitae ullam! Saepe autem veniam iure nostrum assumenda vero quos impedit consectetur, quod, quae earum sit explicabo aliquam optio ea, accusantium a eos obcaecati odit corrupti expedita officiis ullam incidunt! Expedita praesentium consectetur nisi id, quo repellat totam, beatae consequuntur vitae adipisci reprehenderit deserunt maiores? Optio iure eos tempore. Iure quo minima, ab nemo sed accusantium?
                </p>
                <Link
                    className="post-item-link"
                    to={`/posts/details/${post._id}`}>
                    Read More ...
                </Link>
            </div>
        </div>
    )
}

export default PostItem