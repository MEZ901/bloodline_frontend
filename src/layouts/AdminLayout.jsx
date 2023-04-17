import { Outlet } from "react-router-dom";
import { Sidebar, Topbar } from "../components/admin-dashboard";

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Topbar />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
