import "./posts-page.css"

import PostList from "../../components/posts/PostList";
import Sidebar from "../../components/sidebar/Sidebar";
import { categories } from "../../dummyData"
import Pagination from "../../components/pagination/Pagination";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, getPostsCount } from "../../redux/apiCalls/postApiCall";


const POST_PER_PAGE = 3

const PostsPage = () => {

    const dispatch = useDispatch()
    const { posts, postsCount } = useSelector(state => state.post)
    const [currentPage, setCurrentPage] = useState(1)

    const pages = Math.ceil(postsCount / POST_PER_PAGE)



    useEffect(() => {
        dispatch(fetchPosts(currentPage))
        window.scrollTo(0, 0)
    }, [dispatch, currentPage])


    // get posts count
    useEffect(() => {
        dispatch(getPostsCount())
    }, [dispatch])


    return (
        <>
            <section className="posts-page">
                <PostList posts={posts} />
                <Sidebar categories={categories} />
            </section>
            <Pagination
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

        </>
    )
}

export default PostsPage