import { Outlet } from "react-router-dom"
import { Navbar } from "../components/common"

const UserLayout = () => {
  return (
    <div>
        <div className="w-11/12 m-auto">
            <Navbar />
        </div>
        <Outlet />
    </div>
  )
}

export default UserLayout