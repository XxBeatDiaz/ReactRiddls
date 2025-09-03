import Contexts from "../contexts/contexts";
import { Link } from "react-router";
import "./Home.css";

export default function Home() {
  const userType = Contexts().userTypeContext;

  let loginLink = (
    <Link className="mainButton" to="/Login">
      Login
    </Link>
  );
  let logoutLink = (
    <Link className="mainButton" to="/Logout">
      Logout
    </Link>
  );
  let leaderbordLink = (
    <Link className="asideButton" to="/Leaderbord">
      Leaderbord
    </Link>
  );
  let editModeLink = (
    <Link className="asideButton" to="/EditMode">
      Edit Mode
    </Link>
  );
  let riddlesLink = (
    <Link className="asideButton" to="/AdminRiddles">
      Riddles
    </Link>
  );
  const msgForGuest = "Please Login if you want to play the full version";

  if (userType === "Admin") {
    loginLink = <></>;
  } else if (userType === "RegUser") {
    loginLink = <></>;
    editModeLink = <></>;
    riddlesLink = <></>;
  } else if (userType === "Guest") {
    leaderbordLink = <></>;
    editModeLink = <></>;
    riddlesLink = <></>;
    logoutLink = <></>;
  }

  return (
    <div className="main">
      <h1 className="title">Riddles</h1>
      <div className="mainButtons">
        <Link className="mainButton" to="/Play">Play</Link>
        {logoutLink}
        {loginLink}
      </div>
      <div className="asideButtons">
        {leaderbordLink}
        {editModeLink}
        {riddlesLink}
        {msgForGuest}
      </div>
    </div>
  );
}
