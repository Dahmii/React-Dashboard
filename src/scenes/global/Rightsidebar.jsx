import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useTheme,
  Drawer,
  Hidden,
} from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../themes";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";
import Topbar from "../global/Topbar.jsx";

const Rightsidebar = ({ userAssets = [], onRemoveAsset }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const drawer = (
    <Box
      width={{ xs: "100%", sm: "250px" }}
      bgcolor={colors.primary[400]}
      padding="20px"
      height="100%"
      overflow="auto" // Ensure the sidebar content is scrollable
    >
      <Topbar />
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
        {userAssets.length > 0 ? (
          userAssets.map((asset, index) => (
            <ListItem key={index}>
              <ListItemText primary={asset.name} />
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => onRemoveAsset(asset.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))
        ) : (
          <Typography variant="body2" color="textSecondary">
            No assets found.
          </Typography>
        )}
      </List>
    </Box>
  );

  return (
    <Hidden smDown>
      <Drawer variant="permanent" anchor="right" open>
        {drawer}
      </Drawer>
    </Hidden>
  );
};

Rightsidebar.propTypes = {
  userAssets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  onRemoveAsset: PropTypes.func.isRequired,
};

export default Rightsidebar;
