import React, { useState } from "react";
import { Box, Button, useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "../../themes";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import Rightsidebar from "../../scenes/global/Rightsidebar"; // Ensure the import path is correct

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [showGeographyChart, setShowGeographyChart] = useState(false); // State to control GeographyChart visibility

  // Define screen breakpoints for responsive behavior
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600-960px

  // Determine appropriate grid columns based on screen size
  const gridColumns = isSmallScreen ? 1 : isMediumScreen ? 6 : 12;
  const apiKey = "";

  const handleToggleGeographyChart = () => {
    setShowGeographyChart((prev) => !prev);
  };

  return (
    <Box display="flex" flexDirection={isSmallScreen ? "column" : "row"}>
      <Box
        flexGrow={1}
        m={isSmallScreen ? "10px" : "20px"}
        mr={isSmallScreen ? "0" : "270px"}
      >
        {/* HEADER */}
        {/* <Header title="DASHBOARD" subtitle="Welcome to your dashboard" /> */}

        {/* Toggle Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleToggleGeographyChart}
        >
          {showGeographyChart ? "Hide Maps" : "Show Maps"}
        </Button>

        {/* GRID & CHARTS */}
        <Box
          display="grid"
          gridTemplateColumns={`repeat(${gridColumns}, 1fr)`} // Adjust grid based on screen size
          gridAutoRows="minmax(100px, auto)"
          gap={isSmallScreen ? "10px" : "20px"}
        >
          {/* ROW 1 */}
          {showGeographyChart && (
            <Box gridColumn="span 12" backgroundColor={colors.primary[400]}>
              <Box
                height={
                  isSmallScreen ? "200px" : isMediumScreen ? "400px" : "600px"
                }
                overflow="hidden"
                p="0"
                width="100%"
              >
                <GeographyChart apiKey={apiKey} isDashboard={false} />
              </Box>
            </Box>
          )}

          {/* ROW 2 - Add other components here */}
        </Box>
      </Box>
      {!isSmallScreen && <Rightsidebar />}
    </Box>
  );
};

export default Dashboard;
