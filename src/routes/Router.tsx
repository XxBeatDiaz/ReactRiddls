import Contexts from "../contexts/contexts";
import AdminRoute from "./AdminRoute";
import GuestRoute from "./GuestRoute";
import UserRoute from "./UserRoute";
import './Router.css';

export default function Router() {
  const userType = Contexts().userTypeContext;

  let currentUser = <GuestRoute />;
  
  if (userType === "Admin") {
    currentUser = <AdminRoute />;
  }
  else if (userType === "RegUser") {
    currentUser = <UserRoute />;
  }

  return <div className="router">{currentUser}</div>;
}
