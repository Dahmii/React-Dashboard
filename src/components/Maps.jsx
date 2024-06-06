import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  height: "100%",
  width: "100%",
};

const center = {
  lat: 40.712776, // Example latitude
  lng: -74.005974, // Example longitude
};

const MyMap = ({ apiKey }) => (
  <LoadScript googleMapsApiKey={apiKey}>
    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
      {/* Additional map features like markers can be added here */}
    </GoogleMap>
  </LoadScript>
);

export default MyMap;
