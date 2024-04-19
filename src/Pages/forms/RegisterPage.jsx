import { Link } from "react-router-dom"
import "./forms.css"
import { useState } from "react"
import { toast } from "react-toastify"

// import swal from "sweetalert"

const Register = () => {


    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    // form submit handler
    const registerSubmitHandle = (e) => {
        e.preventDefault()

        if (username.trim() === "" || username.length <= 2) {
            return toast.error("please enter user name valid ...")
        }
        if (email.trim() === "") {
            return toast.error("please enter email address  valid ...")
        }
        if (password.trim() === "" || password.length <= 6) {
            return toast.error("please enter password must be not less than 6 character")
        }
        setTimeout(() => {
            toast.success("data is submited successfully ..... ")
            setUserName("")
            setEmail("")
            setPassword("")
        }, 1000);
        console.log({ username, email, password });

    }





    return (
        <section className="form-container">
            <h1 className="form-title">create new account</h1>
            <form onSubmit={registerSubmitHandle} className="form">
                <div className="form-group">
                    <label htmlFor="username">username: </label>
                    <input
                        type="text"
                        id="username"
                        className="form-input"
                        placeholder="Please Enter Your user name"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>

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
                    Register
                </button>
            </form>
            <div className="form-footer">
                Already have an account ?
                <Link to="/login" className="link">Login</Link>
            </div>
        </section>
    )
}

export default Register