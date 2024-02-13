import { Link } from "react-router-dom"
import "./header.css"
export default function Header () {
    return(
        <header>
            <div className="LogoHeader">
                <Link to="/" ><img src="https://github.com/The-Gaia-Project/Images/blob/main/PreView/placeholder.png?raw=true" alt="logo" className="Logo"/></Link>
            </div>
            <div className="header-text">
                <h1>Quiz</h1>
            </div>
        </header>
    )
}