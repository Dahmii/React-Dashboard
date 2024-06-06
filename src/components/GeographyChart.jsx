import { useTheme } from "@mui/material";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { tokens } from "../themes";

const GeographyChart = ({ apiKey, isDashboard = false }) => {
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

  const options = {
    disableDefaultUI: true,
    zoomControl: true, // Enables zoom controls on the map
    mapTypeControl: true, // Allows the user to change the type of map
    scaleControl: true, // Enables scale control
    streetViewControl: true, // Enables Street View control
    rotateControl: true, // Enables rotate control
    fullscreenControl: true, // Enables fullscreen control
    gestureHandling: "auto", // Allows user gestures like pinching and dragging
    draggable: true, // Should allow the map to be dragged
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={isDashboard ? 5 : 8} // Adjust zoom level based on whether it's in the dashboard
        options={{
          styles: theme.palette.mode === "dark" ? darkTheme : lightTheme, // Optional: adjust map theme based on current MUI theme
          disableDefaultUI: true, // Optional: Disable default map UI to maintain a cleaner look
          draggable: isDashboard ? false : true, // Optional: Disable dragging in dashboard mode
        }}
      >
        {/* You can add additional features like markers or overlays here */}
      </GoogleMap>
    </LoadScript>
  );
};

const darkTheme = [
  // Optional: Define styles for dark mode
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  // More styles can be added here
];

const lightTheme = [
  // Optional: Define styles for light mode
  { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
  // More styles can be added here
];

export default GeographyChart;
