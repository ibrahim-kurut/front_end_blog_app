import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = ({ toggle, setToggle }) => {

    const { user } = useSelector(state => state.auth)

    return (
        <nav
            style={{ clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
            className="navbar">
            <ul className="nav-links">
                <Link to={'/'}>
                    <li
                        onClick={() => setToggle(!toggle)}
                        className="nav-link">
                        home
                    </li>
                </Link>
                <Link to={'/posts'}>
                    <li
                        onClick={() => setToggle(!toggle)}
                        className="nav-link">
                        posts
                    </li>
                </Link>
                {
                    user && (
                        <Link to={'/posts/create-post'}>
                            <li
                                onClick={() => setToggle(!toggle)}
                                className="nav-link">
                                create post
                            </li>
                        </Link>
                    )
                }
                {
                    user?.isAdmin && (
                        <Link to={'/admin-dashboard'}>
                            <li
                                onClick={() => setToggle(!toggle)}
                                className="nav-link">
                                admin
                            </li>
                        </Link>
                    )

                }
            </ul>
        </nav>
    )
}

export default Navbar