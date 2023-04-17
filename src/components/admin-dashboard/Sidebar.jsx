import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import MenuIcon from "@mui/icons-material/Menu";
import { Profile } from "../../assets";

const Sidebar = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <ProSidebar defaultCollapsed={false}>
        <Menu>
          <div className={`flex justify-between items-center p-5`}>
            <span className={`${collapsed && "hidden"}`}> Dashboard</span>
            <MenuIcon
              color="action"
              className="cursor-pointer"
              onClick={() => collapseSidebar()}
            />
          </div>
          <div>
            <div
              className={`mx-auto mb-4 w-36 h-36 rounded-full ${collapsed && "hidden"}`}
              style={{
                backgroundImage: `url('${Profile}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <h3 className={`text-center text-lg ${collapsed && "hidden"} font-semibold`}>Issam Mez</h3>
          </div>
        </Menu>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;
