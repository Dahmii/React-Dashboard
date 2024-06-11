// src/scenes/global/Rightsidebar.jsx
import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../themes";

const Rightsidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      width={{ xs: "100%", sm: "250px" }}
      bgcolor={colors.primary[400]}
      padding="20px"
      height="100vh"
      position="fixed"
      right="0"
      top="0"
      zIndex="1000"
    >
      <Typography variant="h5" fontWeight="600" mb="20px">
        Assets
      </Typography>
      <List>
        <ListItem button component={Link} to="/assets">
          <ListItemText primary="Manage Assets" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Rightsidebar;
