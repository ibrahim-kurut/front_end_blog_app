import "./header.css"
import { useState } from "react"
import Logo from "./Logo"
import Navbar from "./Navbar"
import Login from "./Login"


const Header = () => {

    const [toggle, setToggle] = useState(false)
    return (
        <header className="header">
            <Logo />
            <Navbar toggle={toggle} setToggle={setToggle} />
            <Login toggle={toggle} setToggle={setToggle} />
        </header>
    )
}

export default Header