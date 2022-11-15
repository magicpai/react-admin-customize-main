import LoginIcon from "@mui/icons-material/Login";
import * as React from "react";
import { AppBar, Logout, Menu, UserMenu, useAuthState } from "react-admin";

const checkLogin = () => {
  return localStorage.getItem("username") ? true : false;
};

console.log(checkLogin());

// It's important to pass the ref to allow MUI to manage the keyboard navigation
const LoginMenu = () => {
  console.log("LoginMenu Called")
  return (
    <Menu.Item
      sx={{ color: "black" }}
      to="/signin"
      primaryText="Login"
      leftIcon={<LoginIcon />}
    />
  );
};
// const LoginMenu = () => {
//   if (checkLogin() == true) {
//     return <Logout sx={{ color: "black" }} />;
//   } else {
//     return (
//       <Menu.Item
//         sx={{ color: "black" }}
//         to="/login"
//         primaryText="Login"
//         leftIcon={<LoginIcon />}
//         disabled={checkLogin()}
//       />
//     );
//   }
// };

const MyUserMenu = (props) => {
  console.log("MyUserMenu Called")
  const { isLoading, authenticated } = useAuthState();
  console.log("isLoading:", isLoading)
  console.log("authenticated", authenticated)

  return (
    <UserMenu {...props}>
      {!authenticated && <LoginMenu />}
      <Logout />
    </UserMenu>
  );
};
// const MyUserMenu = (props) => (
//   <UserMenu {...props}>
//     <LoginMenu />
//   </UserMenu>
// );

const MyAppBar = (props) => <AppBar {...props} userMenu={<MyUserMenu />} />;

export default MyAppBar;
