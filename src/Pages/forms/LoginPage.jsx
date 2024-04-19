import "./forms.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import { toast } from "react-toastify"



const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")




    // form submit handler
    const loginSubmitHandle = (e) => {
        e.preventDefault()


        if (email.trim() === "") {
            return toast.error("please enter email address  valid ...")
        }
        if (password.trim() === "" || password.length < 8) {
            return toast.error("please enter password must be not less than 8 character")
        }


        console.log({ email, password });





    }

    return (
        <section className="form-container">
            <h1 className="form-title">login</h1>
            <form onSubmit={loginSubmitHandle} className="form">
                <div className="form-group">
                    <label htmlFor="email">email: </label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="form-input"
                        placeholder="Please Enter Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">password: </label>
                    <input
                        type="password"
                        id="password"
                        className="form-input"
                        placeholder="Please Enter Your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="form-btn">
                    Login
                </button>
            </form>
            <div className="form-footer">
                did you forgot your password ?
                <Link to="/forgot-password" className="link">
                    forgot password
                </Link>
            </div>
        </section>
    )
}

export default Login
