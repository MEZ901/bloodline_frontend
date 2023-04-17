import { Outlet } from "react-router-dom";
import { Sidebar, Topbar } from "../components/admin-dashboard";

const AdminLayout = () => {
  return (
    <div className="flex">
        <div className="">
            <Sidebar />
        </div>
        <div className="w-full">
            <Topbar />
            <Outlet />
        </div>
    </div>
  )
}

export default AdminLayout