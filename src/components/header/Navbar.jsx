import React from 'react'

const Navbar = ({ toggle, setToggle }) => {
    return (
        <nav
            style={{ clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
            className="navbar">
            <ul className="nav-links">
                <li
                    onClick={() => setToggle(!toggle)}
                    className="nav-link">home</li>
                <li
                    onClick={() => setToggle(!toggle)}
                    className="nav-link">posts</li>
                <li
                    onClick={() => setToggle(!toggle)}
                    className="nav-link">create post</li>
                <li
                    onClick={() => setToggle(!toggle)}
                    className="nav-link">admin</li>
            </ul>
        </nav>
    )
}

export default Navbar