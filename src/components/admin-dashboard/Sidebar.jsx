import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  useProSidebar,
} from "react-pro-sidebar";
import { Profile } from "../../assets";
import { Divider, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/auth";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const sm = useMediaQuery("(max-width: 600px)");
  const { firstName, lastName, profileImage } = useSelector(selectCurrentUser);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <ProSidebar defaultCollapsed={sm ? true : false}>
        <Menu>
          <div className={`flex justify-between items-center p-5`}>
            <Link to="/" className={`${collapsed && "hidden"}`}>BloodLink</Link>
            <MenuIcon
              className={`cursor-pointer ${collapsed && "flex-1"}`}
              onClick={() => collapseSidebar()}
            />
          </div>
          <div>
            <div
              className={`mx-auto mb-4 w-32 h-32 rounded-full ${
                collapsed && "hidden"
              }`}
              style={{
                backgroundImage: `url('${profileImage || Profile}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <h3
              className={`text-center text-lg ${
                collapsed && "hidden"
              } font-semibold mb-3`}
            >{`${firstName} ${lastName}`}</h3>
          </div>
          <Divider />
          <MenuItem
            icon={<DashboardOutlinedIcon />}
            component={<Link to="dashboard" />}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            icon={<PersonOutlineOutlinedIcon />}
            component={<Link to="users" />}
          >
            Users
          </MenuItem>
          <MenuItem
            icon={<LocalHospitalOutlinedIcon />}
            component={<Link to="hospitals" />}
          >
            Hospitals
          </MenuItem>
          <MenuItem
            icon={<SettingsOutlinedIcon />}
            component={<Link to="settings" />}
          >
            Settings
          </MenuItem>
        </Menu>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;
