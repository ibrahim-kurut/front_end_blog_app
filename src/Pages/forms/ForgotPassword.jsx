import "./forms.css"
import { useState } from "react"
import { toast } from "react-toastify"

const ForgotPassword = () => {


    const [email, setEmail] = useState("")

    // form submit handler
    const formSubmitHandle = (e) => {
        e.preventDefault()


        if (email.trim() === "") {
            return toast.error("please enter email address  valid ...")
        }


        console.log({ email });

    }

    return (
        <section className="form-container">
            <h1 className="form-title">Forgot Password</h1>
            <form onSubmit={formSubmitHandle} className="form">
                <div className="form-group">
                    <label htmlFor="email">email: </label>
                    <input
                        type="email"
                        id="email"
                        className="form-input"
                        placeholder="Please Enter Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button type="submit" className="form-btn">
                    submit
                </button>
            </form>

        </section>
    )
}

export default ForgotPassword






