import "./home.css"
import React from 'react'
import { Link } from 'react-router-dom'
import PostList from "../../components/posts/PostList"
import { posts, categories } from "../../dummyData"
import Sidebar from "../../components/sidebar/Sidebar"
const HomePage = () => {
    return (
        <section className="home ">
            <div className="home-hero-header">
                <div className="home-hero-header-layout">
                    <h1 className="home-title ">
                        welcome to blog
                    </h1>
                </div>
            </div>
            <div className="home-latest-post">latest post</div>
            <div className="home-container">
                <PostList posts={posts} />
                <Sidebar categories={categories} />


            </div>
            <div className="home-see-posts-link">
                <Link to="/posts" className="home-link">
                    see all posts &#8594;
                </Link>
            </div>
        </section>
    )
}

export default HomePage