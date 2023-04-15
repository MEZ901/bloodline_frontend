import { Outlet } from "react-router-dom";
import { Navbar } from "../components/common";
import { Footer } from "../components/common";

const UserLayout = () => {
  return (
    <div>
      <div className="w-11/12 m-auto">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
