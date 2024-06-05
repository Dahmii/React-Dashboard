import { Box, useMediaQuery, useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../themes";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  // Adjust the chart height based on the screen size
  const chartHeight = isSmallScreen ? "50vh" : isMediumScreen ? "60vh" : "75vh";
  const apiKey = "YOUR_API_KEY";

  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />
      <Box
        height={chartHeight}
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
        sx={{
          overflowX: "auto",
          margin: isSmallScreen ? "0" : "20px 0",
          padding: isSmallScreen ? "0 10px" : "0",
        }}
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
