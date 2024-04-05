import React from 'react'
import { Link } from 'react-router-dom'

const Login = ({ toggle, setToggle }) => {
    return (
        <div className="login">
            <Link to={'/login'}>
                <div className="header-right-link">
                    login
                </div>
            </Link>

            <Link to={'/register'}>
                <div className="header-right-link">
                    register
                </div>
            </Link>
            {/*===== burger menu icon===== */}
            <div
                onClick={() => setToggle(prev => !prev)}
                className="header-menu">
                {toggle ? <i class="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}

            </div>
        </div>
    )
}

export default Login