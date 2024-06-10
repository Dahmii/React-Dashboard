import React, { useContext, useState } from "react";
import {
  Box,
  FormControlLabel,
  Switch,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { ColorModeContext } from "../../themes";

const Settings = () => {
  const colorMode = useContext(ColorModeContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleThemeChange = (event) => {
    colorMode.toggleColorMode();
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordReset = () => {
    // Logic to handle password reset
    console.log("Password Reset to:", password);
  };

  return (
    <Box p={3}>
      <Typography variant="h6" gutterBottom>
        Settings
      </Typography>
      <Box>
        <FormControlLabel
          control={
            <Switch
              checked={colorMode.mode === "dark"}
              onChange={handleThemeChange}
            />
          }
          label="Dark Mode"
        />
        <Typography variant="h6" gutterBottom marginTop={4}>
          Profile Settings
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          variant="outlined"
          value={name}
          onChange={handleNameChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
        />
        <Typography variant="h6" gutterBottom marginTop={4}>
          Password Reset
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="New Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handlePasswordReset}
          sx={{ mt: 2 }}
        >
          Reset Password
        </Button>
      </Box>
    </Box>
  );
};

export default Settings;
