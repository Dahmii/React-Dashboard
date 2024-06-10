import React from "react";
import { useTheme } from "@mui/material";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { tokens } from "../themes";

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: 40.712776, // Set the default center of the map (New York)
    lng: -74.005974,
  };

  const zoomLevel = isDashboard ? 5 : 8;

  return (
    <MapContainer
      style={mapContainerStyle}
      center={[center.lat, center.lng]}
      zoom={zoomLevel}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* You can add additional features like markers or overlays here */}
    </MapContainer>
  );
};

export default GeographyChart;
