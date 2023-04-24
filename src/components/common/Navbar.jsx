import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DashboardOutlined, Logout, Settings } from "@mui/icons-material";
import { Logo } from "../../assets";
import { selectCurrentUser, authLogOut } from "../../features/auth";
import { useLogOutMutation } from "../../app/api";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [logOut] = useLogOutMutation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await logOut();
    dispatch(authLogOut());
    navigate("/");
  };

  return (
    <div className="flex justify-between mt-5">
      <div style={{ width: "5%", minWidth: "50px" }}>
        <img
          src={Logo}
          alt="Logo"
          className="max-w-full h-auto cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <div>
        {user ? (
          <div className="flex md:order-2">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography sx={{ mr: 1 }}>
                {`${user.firstName} ${user.lastName}`}
              </Typography>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      textTransform: "uppercase",
                      bgcolor: "#FF1C23",
                    }}
                    src={user.profileImage || undefined}
                  >
                    {user.firstName.charAt(0)}
                  </Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={() => navigate("/profile")}>
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    textTransform: "uppercase",
                    bgcolor: "#FF1C23",
                  }}
                  src={user.profileImage || undefined}
                >
                  {user.firstName.charAt(0)}
                </Avatar>{" "}
                Profile
              </MenuItem>
              <Divider />
              <MenuItem onClick={() => navigate("/admin/dashboard")}>
                <ListItemIcon>
                  <DashboardOutlined fontSize="small" />
                </ListItemIcon>
                Dashboard
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <>
            <Button
              variant="text"
              onClick={() => navigate("/login")}
              className="mx-3"
              style={{ color: "#FF1C23" }}
            >
              LOGIN
            </Button>
            <Button
              variant="contained"
              onClick={() => navigate("/register")}
              style={{ backgroundColor: "#FF1C23" }}
            >
              SIGNUP
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
