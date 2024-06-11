import { Box, useTheme, useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import Rightsidebar from "../../scenes/global/Rightsidebar"; // Ensure the import path is correct

const Line = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  // Adjust the chart height based on the screen size
  const chartHeight = isSmallScreen ? "50vh" : isMediumScreen ? "60vh" : "75vh";

  return (
    <Box display="flex">
      <Box flexGrow={1} m="20px" mr="270px">
        <Header title="Line Chart" subtitle="Simple Line Chart" />
        <Box
          height={chartHeight}
          sx={{
            overflowX: "auto",
            margin: isSmallScreen ? "0" : "20px 0",
            padding: isSmallScreen ? "0 10px" : "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            width="100%"
            height="100%"
            sx={{
              maxWidth: "100%",
              maxHeight: "100%",
              overflow: "hidden",
            }}
          >
            <LineChart />
          </Box>
        </Box>
      </Box>
      <Rightsidebar />
    </Box>
  );
};

export default Line;
