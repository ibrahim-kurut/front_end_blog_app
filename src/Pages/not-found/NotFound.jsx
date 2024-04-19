import "./not-found.css"
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <div className="not-found">
                <div className="icon">
                    <i class="bi bi-emoji-frown"></i>
                </div>
                <div className="top">  404</div>
                <h1 className="text-4xl capitalize">oops... page Not Found</h1>
                <Link
                    className="link"
                    to="/">go to home page</Link>
            </div>
        </>
    )
}

export default NotFound