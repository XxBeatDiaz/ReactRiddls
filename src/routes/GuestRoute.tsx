import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Play from "../pages/Play";
import Login from "../pages/Login";
import NotAllowdPage from "../pages/NotAllowdPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function GuestRoute() {
  return (
    <div>
      <div>Guest</div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Play" element={<Play />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Leaderbord" element={<NotAllowdPage />} />
        <Route path="/EditMode" element={<NotAllowdPage />} />
        <Route path="/AdminRiddles" element={<NotAllowdPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
