import './category-page.css'
import { useParams } from 'react-router-dom'
import PostList from '../../components/posts/PostList'
// import { posts } from "../../dummyData"
import { useEffect } from 'react'


import { useDispatch, useSelector } from 'react-redux'
import { getPostsByCategory } from '../../redux/apiCalls/postApiCall'



const CategoryPage = () => {
    const { category } = useParams()

    const dispatch = useDispatch()
    const { postsCategory } = useSelector(state => state.post)


    useEffect(() => {
        dispatch(getPostsByCategory(category))
        window.scrollTo(0, 0)
    }, [dispatch, category])


    return (
        <section className="category">
            <h1 className="category-title">
                {category} posts
            </h1>
            <PostList posts={postsCategory} />
        </section>
    )
}

export default CategoryPage