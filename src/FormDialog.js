import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useLogin, useNotify } from "react-admin";

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(props.open);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = useLogin();
  const notify = useNotify();

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  // using then catch
  const handleSubmit = (e) => {
    e.preventDefault();
    // will call authProvider.login({ username, password })
    login({ username, password }).catch(() => notify("Invalid username or password"));
    // setOpen(false);
  };

  // use async wait
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await login({ username, password });
  //     console.log("Login Response:", response.success);
  //   } catch (error) {
  //     notify(error);
  //   }
  // };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Please Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            fullWidth
            id="outlined-textarea"
            label="Username"
            placeholder="Input your username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            multiline
          />
          <TextField
            sx={{ marginY: 2 }}
            fullWidth
            margin="dense"
            id="standard-basic"
            label="Password"
            placeholder="Input your password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            sx={{ marginY: 2 }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
