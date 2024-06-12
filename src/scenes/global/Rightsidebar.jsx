import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../themes";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";

const Rightsidebar = ({ userAssets, onRemoveAsset }) => {
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
      overflow="auto" // Ensure the sidebar content is scrollable
    >
      <Typography variant="h5" fontWeight="600" mb="20px">
        Assets
      </Typography>
      <List>
        <ListItem button component={Link} to="/assets">
          <ListItemText primary="Manage Assets" />
        </ListItem>
      </List>
      <Typography variant="h6" fontWeight="600" mt="20px">
        User Assets
      </Typography>
      <List>
        {userAssets.map((asset, index) => (
          <ListItem key={index}>
            <ListItemText primary={asset} />
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => onRemoveAsset(asset)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

Rightsidebar.propTypes = {
  userAssets: PropTypes.array.isRequired,
  onRemoveAsset: PropTypes.func.isRequired,
};

Rightsidebar.defaultProps = {
  userAssets: [],
};

export default Rightsidebar;
