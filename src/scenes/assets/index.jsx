import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const Assets = () => {
  const [userAssets, setUserAssets] = useState([]);
  const [generalAssets, setGeneralAssets] = useState([
    "Asset 1",
    "Asset 2",
    "Asset 3",
  ]);
  const [newAsset, setNewAsset] = useState("");

  const handleAddUserAsset = () => {
    if (newAsset) {
      setUserAssets([...userAssets, newAsset]);
      setNewAsset("");
    }
  };

  const handleRemoveUserAsset = (asset) => {
    setUserAssets(userAssets.filter((item) => item !== asset));
  };

  const handlePickGeneralAsset = (asset) => {
    if (!userAssets.includes(asset)) {
      setUserAssets([...userAssets, asset]);
    }
  };

  return (
    <Box m="20px">
      <Typography variant="h4" gutterBottom>
        User Assets
      </Typography>
      <Box display="flex" mb="20px">
        <TextField
          label="New Asset"
          value={newAsset}
          onChange={(e) => setNewAsset(e.target.value)}
          variant="outlined"
          sx={{ marginRight: "10px" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddUserAsset}
          startIcon={<AddIcon />}
        >
          Add Asset
        </Button>
      </Box>
      <List>
        {userAssets.map((asset, index) => (
          <ListItem key={index}>
            <ListItemText primary={asset} />
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => handleRemoveUserAsset(asset)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>

      <Typography variant="h4" gutterBottom mt="40px">
        General Assets
      </Typography>
      <List>
        {generalAssets.map((asset, index) => (
          <ListItem
            key={index}
            button
            onClick={() => handlePickGeneralAsset(asset)}
          >
            <ListItemText primary={asset} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Assets;
