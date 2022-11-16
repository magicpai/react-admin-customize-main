const authProvider = {
  login: ({ username, password }) => {
    console.log("LOGIN")
    if (username !== "john" || password !== "123") {
      return Promise.reject({ message: "Wrong credentials" });
    }
    localStorage.setItem("username", username);
    return Promise.resolve({success: true});
  },
  logout: () => {
    console.log("LOGOUT");
    localStorage.removeItem("username");
    return Promise.resolve("/signin");
  },
  checkAuth: () => {
    console.log("CHECKOUT");
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject({
          message: false,
          redirectTo: "/signin",
        });
  },
  checkError: (error) => {
    const status = error.status;
    console.log("CHECKERROR Called")
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },
  getIdentity: () =>
    Promise.resolve({
      id: "user",
      fullName: "John Doe",
    }),
  getPermissions: () => Promise.resolve(""),
};

export default authProvider;
