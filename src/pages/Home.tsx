import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      <Link to="/Login">Login</Link>
      <Link to="/Play">Play</Link>
      <Link to="/Leaderbord">Leaderbord</Link>
      <Link to="/EditMode">Edit Mode</Link>
      <Link to="/AdminRiddles">Riddles</Link>
      <div>Home</div>
    </div>
  );
}
