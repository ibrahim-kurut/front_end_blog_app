import "./posts-page.css"

import PostList from "../../components/posts/PostList";
import Sidebar from "../../components/sidebar/Sidebar";
import { categories } from "../../dummyData"
// import Pagination from "../../components/pagination/Pagination";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../redux/apiCalls/postApiCall";




const PostsPage = () => {

    const dispatch = useDispatch()
    const { posts } = useSelector(state => state.post)

    useEffect(() => {
        dispatch(getAllPosts())
        window.scrollTo(0, 0)
    }, [dispatch])




    return (
        <>
            <section className="posts-page">
                <PostList posts={posts} />
                <Sidebar categories={categories} />
            </section>
            {/* <Pagination /> */}

        </>
    )
}

export default PostsPage