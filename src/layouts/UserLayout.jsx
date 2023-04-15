import { Outlet } from "react-router-dom"
import { Navbar } from "../components/common"
import { Footer } from "../components/landing-page"

const UserLayout = () => {
  return (
    <div>
        <div className="w-11/12 m-auto">
            <Navbar />
        </div>
        <Outlet />
        <Footer />
    </div>
  )
}

export default UserLayout