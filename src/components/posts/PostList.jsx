import PostItem from "./PostItem"
import "./post.css"

const PostList = ({ posts }) => {
    return (
        <div className="post-list">
            {posts.map(post => <PostItem post={post} key={post._id} />)}
        </div>
    )
}

export default PostList