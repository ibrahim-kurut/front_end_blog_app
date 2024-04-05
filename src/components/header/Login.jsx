import React from 'react'

const Login = ({ toggle, setToggle }) => {
    return (
        <div className="login">
            <div className="header-right-link">
                login
            </div>
            <div className="header-right-link">
                register
            </div>
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