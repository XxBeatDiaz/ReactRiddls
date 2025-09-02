import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Play from "../pages/Play";
import Leaderbord from "../pages/Leaderbord";
import EditMode from "../pages/EditMode";
import AdminRiddles from "../pages/AdminRiddles";
import NotFoundPage from "../pages/NotFoundPage";

export default function AdminRoute() {
  return (
    <div>
      <div>AdminRoute</div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Play" element={<Play />} />
        <Route path="/Leaderbord" element={<Leaderbord />} />
        <Route path="/AdminRiddles" element={<AdminRiddles />} />
        <Route path="/EditMode" element={<EditMode />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
