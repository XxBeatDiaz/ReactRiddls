import { Routes, Route } from "react-router";
import Play from "../pages/Play";
import Home from "../pages/Home";
import Leaderbord from "../pages/Leaderbord";
import NotFoundPage from "../pages/NotFoundPage";
import NotAllowdPage from "../pages/NotAllowdPage";

export default function UserRoute() {
  return (
    <div>
      <div>UserRoute</div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Play" element={<Play />} />
        <Route path="/Leaderbord" element={<Leaderbord />} />
        <Route path="/AdminRiddles" element={<NotAllowdPage />} />
        <Route path="/EditMode" element={<NotAllowdPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
