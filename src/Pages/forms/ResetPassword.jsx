import "./forms.css"
import { useState } from "react"
import { toast } from "react-toastify"

const ResetPassword = () => {


    const [newPassword, setNewPassword] = useState("")

    // form submit handler
    const formSubmitHandle = (e) => {
        e.preventDefault()
        if (newPassword.trim() === "" || newPassword.length <= 6) {
            return toast.error("please enter password must be not less than 6 character")
        }

        else {
            toast.success(`Data sented successfully`)
        }

        console.log(newPassword);

    }

    return (
        <section className="form-container">
            <h1 className="form-title">Reset Password</h1>
            <form onSubmit={formSubmitHandle} className="form">

                <div className="form-group">
                    <label htmlFor="password">new password: </label>
                    <input
                        type="password"
                        id="password"
                        className="form-input"
                        placeholder="Please Enter Your new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="form-btn">
                    submit
                </button>
            </form>

        </section>
    )
}

export default ResetPassword




