import React, { useState } from "react";
import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const { BaseLayer } = LayersControl;

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
        <BaseLayer name="CyclOSM">
          <TileLayer url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png" />
        </BaseLayer>
        <BaseLayer name="Cycle Map">
          <TileLayer url="http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png" />
        </BaseLayer>
        <BaseLayer name="Transport Map">
          <TileLayer url="https://{s}.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png" />
        </BaseLayer>
      </LayersControl>
    </MapContainer>
  );
};

export default GeographyChart;
