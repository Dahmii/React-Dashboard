import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  LayerGroup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const { BaseLayer, Overlay } = LayersControl;

const GeographyChart = () => {
  const [currentLayer, setCurrentLayer] = useState("Standard");

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <LayersControl position="topright">
        <BaseLayer checked name="Standard">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </BaseLayer>
        <Overlay name="CyclOSM">
          <TileLayer url="https://{s}.tile-cyclosm.org/cyclosm/{z}/{x}/{y}.png" />
        </Overlay>
        <Overlay name="Cycle Map">
          <TileLayer url="http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png" />
        </Overlay>
        <Overlay name="Transport Map">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </Overlay>
      </LayersControl>
    </MapContainer>
  );
};

export default GeographyChart;
