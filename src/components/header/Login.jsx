import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Login = ({ toggle, setToggle }) => {

    const { user } = useSelector(state => state.auth)

    return (
        <div className="login">
            {
                user ?
                    <>
                        {user.username}
                    </>
                    :
                    <>
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
                    </>
            }
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