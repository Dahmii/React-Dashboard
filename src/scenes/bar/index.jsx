import { Box, useMediaQuery, useTheme } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  // Adjust the chart height based on the screen size
  const chartHeight = isSmallScreen ? "50vh" : isMediumScreen ? "60vh" : "75vh";

  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box
        height={chartHeight}
        sx={{
          overflowX: "auto",
          margin: isSmallScreen ? "0" : "20px 0",
          padding: isSmallScreen ? "0 10px" : "0",
        }}
      >
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
