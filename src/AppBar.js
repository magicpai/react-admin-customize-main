import LoginIcon from "@mui/icons-material/Login";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";
import * as React from "react";
import {
  AppBar,
  UserMenu,
  useAuthState,
  useUserMenu,
  useLogout,
} from "react-admin";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link, useNavigate, redirect } from "react-router-dom";
import ExitIcon from "@mui/icons-material/PowerSettingsNew";

const CustomLogout = React.forwardRef((props, ref) => {
  const logout = useLogout();
  const { onClose } = useUserMenu();
  const handleClick = () => {
    logout();
    onClose();
  }
  return (
    <MenuItem onClick={handleClick} ref={ref}>
      <ExitIcon /> Logout
    </MenuItem>
  );
});


const CustomLogin = React.forwardRef((props, ref) => {
  // We are not using MenuItemLink so we retrieve the onClose function from the UserContext
  const { onClose } = useUserMenu();
  const navigate = useNavigate();

  return (
    <MenuItem
      ref={ref}
      // to="/signin"
      // component={Link}
      // It's important to pass the props to allow MUI to manage the keyboard navigation
      {...props}
      sx={{ color: "text.secondary" }}
      onClick={(event) => {
        navigate("/signin", { replace: true })
        onClose(); // Close the menu
      }}
    >
      <ListItemIcon sx={{ minWidth: 5 }}>
        <LoginIcon />
      </ListItemIcon>
      <ListItemText>Login</ListItemText>
    </MenuItem>
  );
});


const MyUserMenu = (props) => {
  console.log("MyUserMenu Called");
  const { isLoading, authenticated } = useAuthState();
  console.log("isLoading:", isLoading);
  console.log("authenticated", authenticated);

  return (
    <UserMenu {...props}>
      {/* {!authenticated && <LoginMenu />} */}
      <CustomLogin />
      <CustomLogout />
    </UserMenu>
  );
};


const MyAppBar = (props) => <AppBar {...props} userMenu={<MyUserMenu />} />;

export default MyAppBar;
