import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { logoutUser } from '../../redux/apiCalls/authApiCall';

const Login = ({ toggle, setToggle }) => {

    const { user } = useSelector(state => state.auth)
    const [openDropdown, setOpenDropdown] = useState(false)


    const dispatch = useDispatch()


    // Logout handler
    const logOutHandler = () => {
        dispatch(logoutUser())
        setOpenDropdown(false)

    }



    return (
        <div className="login">
            {
                user ?
                    <>
                        <div className="userInfo">
                            <div className="arrow">
                                {
                                    openDropdown === false ?
                                        <IoMdArrowDropdown onClick={() => setOpenDropdown(true)} />
                                        :
                                        <IoMdArrowDropup onClick={() => setOpenDropdown(false)} />


                                }
                            </div>

                            {
                                openDropdown &&
                                <div className="dropdown">
                                    <Link to={`/profile/${user._id}`}
                                        onClick={() => setOpenDropdown(false)}
                                        className="profile-link" >profile</Link>
                                    <p
                                        onClick={logOutHandler}
                                        className="logout">logout</p>
                                </div>
                            }



                            <div className="username">
                                {user.username}
                            </div>
                            <div className="img">
                                <img src={user.profilePhoto.url} alt="" />
                            </div>
                        </div>

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
                {toggle ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}

            </div>
        </div>
    )
}

export default Login