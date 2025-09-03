import Contexts from "../contexts/contexts";
import { Link } from "react-router";
import "./Header.css";

export default function Header() {
  
  let loginLink = <Link className="link" to="/Login">Login</Link>;
  let leaderbordLink = <Link className="link" to="/Leaderbord">Leaderbord</Link>
  
  const userType = Contexts().userTypeContext;
  if (userType === "Admin" || userType === "RegUser") {
    loginLink = <></>;
  } else if (userType === "Guest") {
    leaderbordLink = <></>;
  }

  return (
    <header>
      <div className="links">
        <Link className="link" to="Home">Home</Link>
        {leaderbordLink}
        {loginLink}
      </div>
      <div className="userType">{userType}</div>
    </header>
  );
}
