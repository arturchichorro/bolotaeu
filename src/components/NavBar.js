import { NavLink, Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-left">
                <Link to="/home">* bolota.eu</Link>
            </ul>
            <ul className="nav-right">
                <li><NavLink to="/posts">Posts</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>
    )
}