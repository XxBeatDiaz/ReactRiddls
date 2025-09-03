import { Routes, Route } from "react-router";
import Play from "../pages/Play";
import Home from "../pages/Home";
import Leaderbord from "../pages/Leaderbord";
import NotFoundPage from "../pages/NotFoundPage";
import NotAllowdPage from "../pages/NotAllowdPage";
import './routes.css';

export default function UserRoute() {
  return (
    <div className="user">
      <div className="routes">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Play" element={<Play />} />
          <Route path="/Leaderbord" element={<Leaderbord />} />
          <Route path="/AdminRiddles" element={<NotAllowdPage />} />
          <Route path="/EditMode" element={<NotAllowdPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}
