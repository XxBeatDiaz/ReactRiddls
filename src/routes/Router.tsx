// import AdminRoute from "./AdminRoute";
// import GuestRoute from "./GuestRoute";
import UserRoute from "./UserRoute";

export default function Router() {
  // const currentUser = <AdminRoute />;
  // const currentUser = <GuestRoute />;
  const currentUser = <UserRoute />;

  return <div>{currentUser}</div>;
}
