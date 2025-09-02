import { Link } from "react-router";
import "./Header.css";

export default function Header() {
  return (
    <header>
        <Link to="/Home">Home</Link>
        <Link to="Login">Login</Link>
        <Link to="/Leaderbord">Leaderbord</Link>
    </header>
  )
}
