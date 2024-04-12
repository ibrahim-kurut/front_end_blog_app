import './category-page.css'
import { useParams } from 'react-router-dom'
import PostList from '../../components/posts/PostList'
import { posts } from "../../dummyData"
import { useEffect } from 'react'


const CategoryPage = () => {
    const { category } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    return (
        <section className="category">
            <h1 className="category-title">
                posts based on {category}
            </h1>
            <PostList posts={posts} />
        </section>
    )
}

export default CategoryPage